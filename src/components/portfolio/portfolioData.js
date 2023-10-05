const PortfolioData = [];

// Function to format WordPress API response and update PortfolioData
const updatePortfolioData = async () => {
  try {
    const response = await fetch('https://cp.khairulimran.com/wp-json/wp/v2/api?acf_format=standard&per_page=100');
    const wordpressData = await response.json();

    // Update PortfolioData with formatted WordPress data
    const formattedData = wordpressData.map((item) => {
      // Remove "https://" and trailing slashes from the preview URL
      const cleanedPreview = item.acf.website_details.preview.replace(/^https?:\/\//, '').replace(/\/+$/, '');

      return {
        id: item.id,
        type: item.acf.porfolio_data.website_type,
        image: item.acf.porfolio_data.porfolio_image_1,
        image2: item.acf.porfolio_data.porfolio_image_2,
        tag: item.acf.porfolio_data.tag,
        modalDetails: [
          {
            project: item.acf.website_details.project,
            client: item.title.rendered,
            language: item.acf.website_details.platform,
            preview: cleanedPreview,
            link: item.acf.website_details.preview,
          },
        ],
      };
    });

    // Update PortfolioData array
    PortfolioData.push(...formattedData);
  } catch (error) {
    console.error('Error updating PortfolioData:', error);
  }
};

// Call the function to update PortfolioData
updatePortfolioData();

export default PortfolioData;
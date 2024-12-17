import { FeaturesListService } from "../Services/FeaturesServices.js"



export const FeaturesList = async (req, res) => {
     
    const result = await FeaturesListService();
    res.json(result);

}
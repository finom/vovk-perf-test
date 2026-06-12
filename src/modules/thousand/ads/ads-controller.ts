import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ads")
export default class AdsController {
  @operation({
    summary: "Get Ads",
  })
  @get()
  static getAds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ads",
  })
  @post("{id}")
  static createAds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

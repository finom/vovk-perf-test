import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ad")
export default class AdController {
  @operation({
    summary: "Get Ad",
  })
  @get()
  static getAd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ad",
  })
  @post("{id}")
  static createAd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

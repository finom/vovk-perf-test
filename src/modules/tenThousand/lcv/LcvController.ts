import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcv")
export default class LcvController {
  @operation({
    summary: "Get Lcv",
  })
  @get()
  static getLcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcv",
  })
  @post("{id}")
  static createLcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

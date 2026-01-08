import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebm")
export default class EbmController {
  @operation({
    summary: "Get Ebm",
  })
  @get()
  static getEbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebm",
  })
  @post("{id}")
  static createEbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

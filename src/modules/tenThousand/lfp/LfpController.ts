import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfp")
export default class LfpController {
  @operation({
    summary: "Get Lfp",
  })
  @get()
  static getLfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfp",
  })
  @post("{id}")
  static createLfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

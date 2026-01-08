import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfm")
export default class LfmController {
  @operation({
    summary: "Get Lfm",
  })
  @get()
  static getLfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfm",
  })
  @post("{id}")
  static createLfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

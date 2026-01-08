import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfj")
export default class LfjController {
  @operation({
    summary: "Get Lfj",
  })
  @get()
  static getLfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfj",
  })
  @post("{id}")
  static createLfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

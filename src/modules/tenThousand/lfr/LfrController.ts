import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfr")
export default class LfrController {
  @operation({
    summary: "Get Lfr",
  })
  @get()
  static getLfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfr",
  })
  @post("{id}")
  static createLfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfm")
export default class DfmController {
  @operation({
    summary: "Get Dfm",
  })
  @get()
  static getDfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfm",
  })
  @post("{id}")
  static createDfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

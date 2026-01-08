import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnm")
export default class FnmController {
  @operation({
    summary: "Get Fnm",
  })
  @get()
  static getFnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnm",
  })
  @post("{id}")
  static createFnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

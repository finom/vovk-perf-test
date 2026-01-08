import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbm")
export default class FbmController {
  @operation({
    summary: "Get Fbm",
  })
  @get()
  static getFbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbm",
  })
  @post("{id}")
  static createFbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbg")
export default class FbgController {
  @operation({
    summary: "Get Fbg",
  })
  @get()
  static getFbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbg",
  })
  @post("{id}")
  static createFbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

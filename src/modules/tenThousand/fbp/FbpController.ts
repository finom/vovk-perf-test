import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbp")
export default class FbpController {
  @operation({
    summary: "Get Fbp",
  })
  @get()
  static getFbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbp",
  })
  @post("{id}")
  static createFbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

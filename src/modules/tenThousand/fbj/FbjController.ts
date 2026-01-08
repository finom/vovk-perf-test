import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbj")
export default class FbjController {
  @operation({
    summary: "Get Fbj",
  })
  @get()
  static getFbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbj",
  })
  @post("{id}")
  static createFbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

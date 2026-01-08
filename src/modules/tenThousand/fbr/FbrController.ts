import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbr")
export default class FbrController {
  @operation({
    summary: "Get Fbr",
  })
  @get()
  static getFbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbr",
  })
  @post("{id}")
  static createFbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

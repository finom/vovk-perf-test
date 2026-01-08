import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbz")
export default class FbzController {
  @operation({
    summary: "Get Fbz",
  })
  @get()
  static getFbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbz",
  })
  @post("{id}")
  static createFbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

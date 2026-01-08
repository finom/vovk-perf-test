import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fb")
export default class FbController {
  @operation({
    summary: "Get Fb",
  })
  @get()
  static getFb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fb",
  })
  @post("{id}")
  static createFb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

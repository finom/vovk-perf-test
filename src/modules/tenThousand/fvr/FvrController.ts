import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvr")
export default class FvrController {
  @operation({
    summary: "Get Fvr",
  })
  @get()
  static getFvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvr",
  })
  @post("{id}")
  static createFvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

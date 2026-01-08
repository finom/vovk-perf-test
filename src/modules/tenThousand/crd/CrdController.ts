import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crd")
export default class CrdController {
  @operation({
    summary: "Get Crd",
  })
  @get()
  static getCrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crd",
  })
  @post("{id}")
  static createCrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

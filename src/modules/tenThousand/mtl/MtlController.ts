import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtl")
export default class MtlController {
  @operation({
    summary: "Get Mtl",
  })
  @get()
  static getMtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtl",
  })
  @post("{id}")
  static createMtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

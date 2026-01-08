import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njl")
export default class NjlController {
  @operation({
    summary: "Get Njl",
  })
  @get()
  static getNjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njl",
  })
  @post("{id}")
  static createNjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

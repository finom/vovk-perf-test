import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcl")
export default class MclController {
  @operation({
    summary: "Get Mcl",
  })
  @get()
  static getMcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcl",
  })
  @post("{id}")
  static createMcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

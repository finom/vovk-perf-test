import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcr")
export default class McrController {
  @operation({
    summary: "Get Mcr",
  })
  @get()
  static getMcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcr",
  })
  @post("{id}")
  static createMcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

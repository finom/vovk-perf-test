import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcn")
export default class McnController {
  @operation({
    summary: "Get Mcn",
  })
  @get()
  static getMcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcn",
  })
  @post("{id}")
  static createMcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

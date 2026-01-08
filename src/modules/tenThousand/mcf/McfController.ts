import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcf")
export default class McfController {
  @operation({
    summary: "Get Mcf",
  })
  @get()
  static getMcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcf",
  })
  @post("{id}")
  static createMcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

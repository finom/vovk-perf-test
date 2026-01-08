import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcg")
export default class McgController {
  @operation({
    summary: "Get Mcg",
  })
  @get()
  static getMcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcg",
  })
  @post("{id}")
  static createMcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

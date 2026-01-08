import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcw")
export default class McwController {
  @operation({
    summary: "Get Mcw",
  })
  @get()
  static getMcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcw",
  })
  @post("{id}")
  static createMcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcz")
export default class MczController {
  @operation({
    summary: "Get Mcz",
  })
  @get()
  static getMcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcz",
  })
  @post("{id}")
  static createMcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

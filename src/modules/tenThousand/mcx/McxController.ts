import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcx")
export default class McxController {
  @operation({
    summary: "Get Mcx",
  })
  @get()
  static getMcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcx",
  })
  @post("{id}")
  static createMcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

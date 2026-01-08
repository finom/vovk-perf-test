import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgw")
export default class JgwController {
  @operation({
    summary: "Get Jgw",
  })
  @get()
  static getJgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgw",
  })
  @post("{id}")
  static createJgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

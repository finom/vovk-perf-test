import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmg")
export default class JmgController {
  @operation({
    summary: "Get Jmg",
  })
  @get()
  static getJmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmg",
  })
  @post("{id}")
  static createJmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

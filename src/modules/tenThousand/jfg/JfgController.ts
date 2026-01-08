import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfg")
export default class JfgController {
  @operation({
    summary: "Get Jfg",
  })
  @get()
  static getJfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfg",
  })
  @post("{id}")
  static createJfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

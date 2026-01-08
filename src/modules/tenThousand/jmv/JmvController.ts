import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmv")
export default class JmvController {
  @operation({
    summary: "Get Jmv",
  })
  @get()
  static getJmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmv",
  })
  @post("{id}")
  static createJmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

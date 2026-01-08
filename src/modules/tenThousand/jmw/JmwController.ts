import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmw")
export default class JmwController {
  @operation({
    summary: "Get Jmw",
  })
  @get()
  static getJmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmw",
  })
  @post("{id}")
  static createJmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

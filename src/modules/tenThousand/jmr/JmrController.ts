import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmr")
export default class JmrController {
  @operation({
    summary: "Get Jmr",
  })
  @get()
  static getJmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmr",
  })
  @post("{id}")
  static createJmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

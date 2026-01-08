import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmx")
export default class JmxController {
  @operation({
    summary: "Get Jmx",
  })
  @get()
  static getJmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmx",
  })
  @post("{id}")
  static createJmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

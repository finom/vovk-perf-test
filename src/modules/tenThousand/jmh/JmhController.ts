import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmh")
export default class JmhController {
  @operation({
    summary: "Get Jmh",
  })
  @get()
  static getJmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmh",
  })
  @post("{id}")
  static createJmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

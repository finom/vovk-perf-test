import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbr")
export default class JbrController {
  @operation({
    summary: "Get Jbr",
  })
  @get()
  static getJbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbr",
  })
  @post("{id}")
  static createJbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

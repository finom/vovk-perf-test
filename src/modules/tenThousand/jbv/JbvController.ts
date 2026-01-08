import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbv")
export default class JbvController {
  @operation({
    summary: "Get Jbv",
  })
  @get()
  static getJbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbv",
  })
  @post("{id}")
  static createJbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

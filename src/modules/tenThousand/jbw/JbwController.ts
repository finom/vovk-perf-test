import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbw")
export default class JbwController {
  @operation({
    summary: "Get Jbw",
  })
  @get()
  static getJbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbw",
  })
  @post("{id}")
  static createJbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

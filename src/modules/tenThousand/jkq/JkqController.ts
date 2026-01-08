import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkq")
export default class JkqController {
  @operation({
    summary: "Get Jkq",
  })
  @get()
  static getJkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkq",
  })
  @post("{id}")
  static createJkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

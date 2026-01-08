import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlu")
export default class JluController {
  @operation({
    summary: "Get Jlu",
  })
  @get()
  static getJlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlu",
  })
  @post("{id}")
  static createJlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

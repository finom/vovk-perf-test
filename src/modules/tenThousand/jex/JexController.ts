import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jex")
export default class JexController {
  @operation({
    summary: "Get Jex",
  })
  @get()
  static getJex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jex",
  })
  @post("{id}")
  static createJex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

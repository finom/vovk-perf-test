import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arg")
export default class ArgController {
  @operation({
    summary: "Get Arg",
  })
  @get()
  static getArg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arg",
  })
  @post("{id}")
  static createArg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

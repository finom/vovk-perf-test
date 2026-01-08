import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jly")
export default class JlyController {
  @operation({
    summary: "Get Jly",
  })
  @get()
  static getJly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jly",
  })
  @post("{id}")
  static createJly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

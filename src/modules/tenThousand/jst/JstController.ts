import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jst")
export default class JstController {
  @operation({
    summary: "Get Jst",
  })
  @get()
  static getJst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jst",
  })
  @post("{id}")
  static createJst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

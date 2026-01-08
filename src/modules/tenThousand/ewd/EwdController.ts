import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewd")
export default class EwdController {
  @operation({
    summary: "Get Ewd",
  })
  @get()
  static getEwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewd",
  })
  @post("{id}")
  static createEwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

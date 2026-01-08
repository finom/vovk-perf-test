import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbb")
export default class JbbController {
  @operation({
    summary: "Get Jbb",
  })
  @get()
  static getJbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbb",
  })
  @post("{id}")
  static createJbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

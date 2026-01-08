import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtn")
export default class JtnController {
  @operation({
    summary: "Get Jtn",
  })
  @get()
  static getJtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtn",
  })
  @post("{id}")
  static createJtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

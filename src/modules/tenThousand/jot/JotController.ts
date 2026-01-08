import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jot")
export default class JotController {
  @operation({
    summary: "Get Jot",
  })
  @get()
  static getJot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jot",
  })
  @post("{id}")
  static createJot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

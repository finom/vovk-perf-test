import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlx")
export default class JlxController {
  @operation({
    summary: "Get Jlx",
  })
  @get()
  static getJlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlx",
  })
  @post("{id}")
  static createJlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

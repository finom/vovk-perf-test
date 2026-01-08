import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfm")
export default class JfmController {
  @operation({
    summary: "Get Jfm",
  })
  @get()
  static getJfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfm",
  })
  @post("{id}")
  static createJfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

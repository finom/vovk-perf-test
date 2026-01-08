import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxv")
export default class JxvController {
  @operation({
    summary: "Get Jxv",
  })
  @get()
  static getJxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxv",
  })
  @post("{id}")
  static createJxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

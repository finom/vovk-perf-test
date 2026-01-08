import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlv")
export default class JlvController {
  @operation({
    summary: "Get Jlv",
  })
  @get()
  static getJlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlv",
  })
  @post("{id}")
  static createJlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

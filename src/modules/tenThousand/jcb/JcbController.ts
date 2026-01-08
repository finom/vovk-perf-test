import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcb")
export default class JcbController {
  @operation({
    summary: "Get Jcb",
  })
  @get()
  static getJcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcb",
  })
  @post("{id}")
  static createJcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

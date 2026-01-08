import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcq")
export default class JcqController {
  @operation({
    summary: "Get Jcq",
  })
  @get()
  static getJcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcq",
  })
  @post("{id}")
  static createJcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcm")
export default class JcmController {
  @operation({
    summary: "Get Jcm",
  })
  @get()
  static getJcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcm",
  })
  @post("{id}")
  static createJcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

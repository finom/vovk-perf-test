import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcv")
export default class JcvController {
  @operation({
    summary: "Get Jcv",
  })
  @get()
  static getJcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcv",
  })
  @post("{id}")
  static createJcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

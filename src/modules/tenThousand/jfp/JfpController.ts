import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfp")
export default class JfpController {
  @operation({
    summary: "Get Jfp",
  })
  @get()
  static getJfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfp",
  })
  @post("{id}")
  static createJfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

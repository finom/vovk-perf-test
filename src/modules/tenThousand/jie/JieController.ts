import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jie")
export default class JieController {
  @operation({
    summary: "Get Jie",
  })
  @get()
  static getJie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jie",
  })
  @post("{id}")
  static createJie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

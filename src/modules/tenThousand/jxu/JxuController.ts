import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxu")
export default class JxuController {
  @operation({
    summary: "Get Jxu",
  })
  @get()
  static getJxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxu",
  })
  @post("{id}")
  static createJxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

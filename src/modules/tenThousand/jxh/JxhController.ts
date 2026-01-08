import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxh")
export default class JxhController {
  @operation({
    summary: "Get Jxh",
  })
  @get()
  static getJxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxh",
  })
  @post("{id}")
  static createJxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

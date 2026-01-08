import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqw")
export default class JqwController {
  @operation({
    summary: "Get Jqw",
  })
  @get()
  static getJqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqw",
  })
  @post("{id}")
  static createJqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

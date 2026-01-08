import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqx")
export default class JqxController {
  @operation({
    summary: "Get Jqx",
  })
  @get()
  static getJqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqx",
  })
  @post("{id}")
  static createJqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

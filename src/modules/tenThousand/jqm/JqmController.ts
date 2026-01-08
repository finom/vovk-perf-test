import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqm")
export default class JqmController {
  @operation({
    summary: "Get Jqm",
  })
  @get()
  static getJqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqm",
  })
  @post("{id}")
  static createJqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqb")
export default class JqbController {
  @operation({
    summary: "Get Jqb",
  })
  @get()
  static getJqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqb",
  })
  @post("{id}")
  static createJqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkb")
export default class JkbController {
  @operation({
    summary: "Get Jkb",
  })
  @get()
  static getJkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkb",
  })
  @post("{id}")
  static createJkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

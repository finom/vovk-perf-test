import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jph")
export default class JphController {
  @operation({
    summary: "Get Jph",
  })
  @get()
  static getJph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jph",
  })
  @post("{id}")
  static createJph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

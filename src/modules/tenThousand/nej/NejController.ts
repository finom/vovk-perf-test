import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nej")
export default class NejController {
  @operation({
    summary: "Get Nej",
  })
  @get()
  static getNej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nej",
  })
  @post("{id}")
  static createNej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

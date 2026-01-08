import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("re")
export default class ReController {
  @operation({
    summary: "Get Re",
  })
  @get()
  static getRe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Re",
  })
  @post("{id}")
  static createRe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

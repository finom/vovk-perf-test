import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llj")
export default class LljController {
  @operation({
    summary: "Get Llj",
  })
  @get()
  static getLlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llj",
  })
  @post("{id}")
  static createLlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

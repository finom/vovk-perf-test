import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpo")
export default class DpoController {
  @operation({
    summary: "Get Dpo",
  })
  @get()
  static getDpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpo",
  })
  @post("{id}")
  static createDpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nph")
export default class NphController {
  @operation({
    summary: "Get Nph",
  })
  @get()
  static getNph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nph",
  })
  @post("{id}")
  static createNph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

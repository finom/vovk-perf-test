import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltl")
export default class LtlController {
  @operation({
    summary: "Get Ltl",
  })
  @get()
  static getLtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltl",
  })
  @post("{id}")
  static createLtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

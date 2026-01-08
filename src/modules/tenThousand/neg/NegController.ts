import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("neg")
export default class NegController {
  @operation({
    summary: "Get Neg",
  })
  @get()
  static getNeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Neg",
  })
  @post("{id}")
  static createNeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

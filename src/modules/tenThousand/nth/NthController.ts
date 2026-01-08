import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nth")
export default class NthController {
  @operation({
    summary: "Get Nth",
  })
  @get()
  static getNth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nth",
  })
  @post("{id}")
  static createNth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

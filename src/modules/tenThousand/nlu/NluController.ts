import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlu")
export default class NluController {
  @operation({
    summary: "Get Nlu",
  })
  @get()
  static getNlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlu",
  })
  @post("{id}")
  static createNlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

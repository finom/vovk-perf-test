import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fct")
export default class FctController {
  @operation({
    summary: "Get Fct",
  })
  @get()
  static getFct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fct",
  })
  @post("{id}")
  static createFct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

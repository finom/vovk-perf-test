import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fin")
export default class FinController {
  @operation({
    summary: "Get Fin",
  })
  @get()
  static getFin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fin",
  })
  @post("{id}")
  static createFin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

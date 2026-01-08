import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ra")
export default class RaController {
  @operation({
    summary: "Get Ra",
  })
  @get()
  static getRa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ra",
  })
  @post("{id}")
  static createRa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

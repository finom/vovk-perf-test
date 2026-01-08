import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqo")
export default class EqoController {
  @operation({
    summary: "Get Eqo",
  })
  @get()
  static getEqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqo",
  })
  @post("{id}")
  static createEqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

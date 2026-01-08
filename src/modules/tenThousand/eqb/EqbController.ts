import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqb")
export default class EqbController {
  @operation({
    summary: "Get Eqb",
  })
  @get()
  static getEqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqb",
  })
  @post("{id}")
  static createEqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

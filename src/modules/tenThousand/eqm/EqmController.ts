import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqm")
export default class EqmController {
  @operation({
    summary: "Get Eqm",
  })
  @get()
  static getEqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqm",
  })
  @post("{id}")
  static createEqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqr")
export default class EqrController {
  @operation({
    summary: "Get Eqr",
  })
  @get()
  static getEqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqr",
  })
  @post("{id}")
  static createEqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

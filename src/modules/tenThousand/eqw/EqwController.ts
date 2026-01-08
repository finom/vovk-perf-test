import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqw")
export default class EqwController {
  @operation({
    summary: "Get Eqw",
  })
  @get()
  static getEqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqw",
  })
  @post("{id}")
  static createEqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

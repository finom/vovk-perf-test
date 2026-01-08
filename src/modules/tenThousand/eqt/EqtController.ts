import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqt")
export default class EqtController {
  @operation({
    summary: "Get Eqt",
  })
  @get()
  static getEqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqt",
  })
  @post("{id}")
  static createEqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

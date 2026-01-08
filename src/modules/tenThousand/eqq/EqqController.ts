import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqq")
export default class EqqController {
  @operation({
    summary: "Get Eqq",
  })
  @get()
  static getEqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqq",
  })
  @post("{id}")
  static createEqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

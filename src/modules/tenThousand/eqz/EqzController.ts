import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqz")
export default class EqzController {
  @operation({
    summary: "Get Eqz",
  })
  @get()
  static getEqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqz",
  })
  @post("{id}")
  static createEqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqg")
export default class EqgController {
  @operation({
    summary: "Get Eqg",
  })
  @get()
  static getEqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqg",
  })
  @post("{id}")
  static createEqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

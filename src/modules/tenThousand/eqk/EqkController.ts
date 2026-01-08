import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqk")
export default class EqkController {
  @operation({
    summary: "Get Eqk",
  })
  @get()
  static getEqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqk",
  })
  @post("{id}")
  static createEqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

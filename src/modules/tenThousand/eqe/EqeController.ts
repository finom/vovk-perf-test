import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqe")
export default class EqeController {
  @operation({
    summary: "Get Eqe",
  })
  @get()
  static getEqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqe",
  })
  @post("{id}")
  static createEqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

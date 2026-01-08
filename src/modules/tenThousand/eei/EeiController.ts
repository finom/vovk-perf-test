import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eei")
export default class EeiController {
  @operation({
    summary: "Get Eei",
  })
  @get()
  static getEei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eei",
  })
  @post("{id}")
  static createEei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

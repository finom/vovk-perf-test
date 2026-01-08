import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kei")
export default class KeiController {
  @operation({
    summary: "Get Kei",
  })
  @get()
  static getKei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kei",
  })
  @post("{id}")
  static createKei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

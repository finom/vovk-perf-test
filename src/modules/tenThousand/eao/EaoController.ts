import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eao")
export default class EaoController {
  @operation({
    summary: "Get Eao",
  })
  @get()
  static getEao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eao",
  })
  @post("{id}")
  static createEao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

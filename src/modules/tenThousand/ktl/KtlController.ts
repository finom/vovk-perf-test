import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktl")
export default class KtlController {
  @operation({
    summary: "Get Ktl",
  })
  @get()
  static getKtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktl",
  })
  @post("{id}")
  static createKtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

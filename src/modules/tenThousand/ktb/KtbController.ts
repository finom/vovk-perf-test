import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktb")
export default class KtbController {
  @operation({
    summary: "Get Ktb",
  })
  @get()
  static getKtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktb",
  })
  @post("{id}")
  static createKtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

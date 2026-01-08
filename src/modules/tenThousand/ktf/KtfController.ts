import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktf")
export default class KtfController {
  @operation({
    summary: "Get Ktf",
  })
  @get()
  static getKtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktf",
  })
  @post("{id}")
  static createKtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

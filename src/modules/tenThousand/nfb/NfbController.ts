import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfb")
export default class NfbController {
  @operation({
    summary: "Get Nfb",
  })
  @get()
  static getNfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfb",
  })
  @post("{id}")
  static createNfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

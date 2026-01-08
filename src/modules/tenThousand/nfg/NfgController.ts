import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfg")
export default class NfgController {
  @operation({
    summary: "Get Nfg",
  })
  @get()
  static getNfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfg",
  })
  @post("{id}")
  static createNfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

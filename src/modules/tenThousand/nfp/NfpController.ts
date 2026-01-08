import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfp")
export default class NfpController {
  @operation({
    summary: "Get Nfp",
  })
  @get()
  static getNfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfp",
  })
  @post("{id}")
  static createNfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

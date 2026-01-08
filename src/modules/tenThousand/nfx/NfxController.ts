import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfx")
export default class NfxController {
  @operation({
    summary: "Get Nfx",
  })
  @get()
  static getNfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfx",
  })
  @post("{id}")
  static createNfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

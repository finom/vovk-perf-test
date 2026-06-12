import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfm")
export default class NfmController {
  @operation({
    summary: "Get Nfm",
  })
  @get()
  static getNfm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfm",
  })
  @post("{id}")
  static createNfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfn")
export default class NfnController {
  @operation({
    summary: "Get Nfn",
  })
  @get()
  static getNfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfn",
  })
  @post("{id}")
  static createNfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

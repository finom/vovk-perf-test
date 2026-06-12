import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfq")
export default class NfqController {
  @operation({
    summary: "Get Nfq",
  })
  @get()
  static getNfq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfq",
  })
  @post("{id}")
  static createNfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

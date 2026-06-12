import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfv")
export default class NfvController {
  @operation({
    summary: "Get Nfv",
  })
  @get()
  static getNfv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfv",
  })
  @post("{id}")
  static createNfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

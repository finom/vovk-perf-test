import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfz")
export default class NfzController {
  @operation({
    summary: "Get Nfz",
  })
  @get()
  static getNfz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfz",
  })
  @post("{id}")
  static createNfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

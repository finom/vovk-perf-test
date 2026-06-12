import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfc")
export default class NfcController {
  @operation({
    summary: "Get Nfc",
  })
  @get()
  static getNfc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfc",
  })
  @post("{id}")
  static createNfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

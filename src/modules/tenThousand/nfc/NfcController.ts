import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfc")
export default class NfcController {
  @operation({
    summary: "Get Nfc",
  })
  @get()
  static getNfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfc",
  })
  @post("{id}")
  static createNfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

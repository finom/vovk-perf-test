import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfk")
export default class NfkController {
  @operation({
    summary: "Get Nfk",
  })
  @get()
  static getNfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfk",
  })
  @post("{id}")
  static createNfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

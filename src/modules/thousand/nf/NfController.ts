import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nf")
export default class NfController {
  @operation({
    summary: "Get Nf",
  })
  @get()
  static getNf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nf",
  })
  @post("{id}")
  static createNf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nip")
export default class NipController {
  @operation({
    summary: "Get Nip",
  })
  @get()
  static getNip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nip",
  })
  @post("{id}")
  static createNip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqt")
export default class NqtController {
  @operation({
    summary: "Get Nqt",
  })
  @get()
  static getNqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqt",
  })
  @post("{id}")
  static createNqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iso")
export default class IsoController {
  @operation({
    summary: "Get Iso",
  })
  @get()
  static getIso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iso",
  })
  @post("{id}")
  static createIso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

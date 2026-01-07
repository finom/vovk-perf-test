import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikm")
export default class IkmController {
  @operation({
    summary: "Get Ikm",
  })
  @get()
  static getIkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikm",
  })
  @post("{id}")
  static createIkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

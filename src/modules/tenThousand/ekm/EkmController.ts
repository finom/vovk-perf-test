import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekm")
export default class EkmController {
  @operation({
    summary: "Get Ekm",
  })
  @get()
  static getEkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekm",
  })
  @post("{id}")
  static createEkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

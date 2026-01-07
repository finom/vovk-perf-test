import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekv")
export default class EkvController {
  @operation({
    summary: "Get Ekv",
  })
  @get()
  static getEkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekv",
  })
  @post("{id}")
  static createEkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

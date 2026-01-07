import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekb")
export default class EkbController {
  @operation({
    summary: "Get Ekb",
  })
  @get()
  static getEkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekb",
  })
  @post("{id}")
  static createEkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

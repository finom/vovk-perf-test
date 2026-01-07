import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekz")
export default class EkzController {
  @operation({
    summary: "Get Ekz",
  })
  @get()
  static getEkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekz",
  })
  @post("{id}")
  static createEkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

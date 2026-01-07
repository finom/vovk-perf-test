import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekq")
export default class EkqController {
  @operation({
    summary: "Get Ekq",
  })
  @get()
  static getEkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekq",
  })
  @post("{id}")
  static createEkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

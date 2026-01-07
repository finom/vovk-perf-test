import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekw")
export default class EkwController {
  @operation({
    summary: "Get Ekw",
  })
  @get()
  static getEkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekw",
  })
  @post("{id}")
  static createEkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekx")
export default class EkxController {
  @operation({
    summary: "Get Ekx",
  })
  @get()
  static getEkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekx",
  })
  @post("{id}")
  static createEkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

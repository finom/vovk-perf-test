import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksa")
export default class KsaController {
  @operation({
    summary: "Get Ksa",
  })
  @get()
  static getKsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksa",
  })
  @post("{id}")
  static createKsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

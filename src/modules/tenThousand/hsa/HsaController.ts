import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsa")
export default class HsaController {
  @operation({
    summary: "Get Hsa",
  })
  @get()
  static getHsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsa",
  })
  @post("{id}")
  static createHsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

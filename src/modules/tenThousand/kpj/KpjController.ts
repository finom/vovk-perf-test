import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpj")
export default class KpjController {
  @operation({
    summary: "Get Kpj",
  })
  @get()
  static getKpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpj",
  })
  @post("{id}")
  static createKpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

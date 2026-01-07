import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uf")
export default class UfController {
  @operation({
    summary: "Get Uf",
  })
  @get()
  static getUf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uf",
  })
  @post("{id}")
  static createUf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

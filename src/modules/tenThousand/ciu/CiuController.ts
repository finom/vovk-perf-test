import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciu")
export default class CiuController {
  @operation({
    summary: "Get Ciu",
  })
  @get()
  static getCiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ciu",
  })
  @post("{id}")
  static createCiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efg")
export default class EfgController {
  @operation({
    summary: "Get Efg",
  })
  @get()
  static getEfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efg",
  })
  @post("{id}")
  static createEfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

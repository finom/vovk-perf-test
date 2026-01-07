import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgw")
export default class KgwController {
  @operation({
    summary: "Get Kgw",
  })
  @get()
  static getKgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgw",
  })
  @post("{id}")
  static createKgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

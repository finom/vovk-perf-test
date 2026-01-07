import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egw")
export default class EgwController {
  @operation({
    summary: "Get Egw",
  })
  @get()
  static getEgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egw",
  })
  @post("{id}")
  static createEgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

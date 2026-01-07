import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcs")
export default class KcsController {
  @operation({
    summary: "Get Kcs",
  })
  @get()
  static getKcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcs",
  })
  @post("{id}")
  static createKcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

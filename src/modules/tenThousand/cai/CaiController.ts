import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cai")
export default class CaiController {
  @operation({
    summary: "Get Cai",
  })
  @get()
  static getCai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cai",
  })
  @post("{id}")
  static createCai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

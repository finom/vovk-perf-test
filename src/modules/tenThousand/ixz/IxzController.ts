import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixz")
export default class IxzController {
  @operation({
    summary: "Get Ixz",
  })
  @get()
  static getIxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixz",
  })
  @post("{id}")
  static createIxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijb")
export default class IjbController {
  @operation({
    summary: "Get Ijb",
  })
  @get()
  static getIjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijb",
  })
  @post("{id}")
  static createIjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

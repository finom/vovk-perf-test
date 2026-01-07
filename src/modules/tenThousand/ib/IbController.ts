import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ib")
export default class IbController {
  @operation({
    summary: "Get Ib",
  })
  @get()
  static getIb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ib",
  })
  @post("{id}")
  static createIb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

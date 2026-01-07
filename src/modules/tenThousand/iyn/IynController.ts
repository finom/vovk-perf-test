import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyn")
export default class IynController {
  @operation({
    summary: "Get Iyn",
  })
  @get()
  static getIyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyn",
  })
  @post("{id}")
  static createIyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

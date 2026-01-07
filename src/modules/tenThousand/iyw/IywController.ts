import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyw")
export default class IywController {
  @operation({
    summary: "Get Iyw",
  })
  @get()
  static getIyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyw",
  })
  @post("{id}")
  static createIyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

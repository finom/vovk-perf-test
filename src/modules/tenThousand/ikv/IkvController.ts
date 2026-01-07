import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikv")
export default class IkvController {
  @operation({
    summary: "Get Ikv",
  })
  @get()
  static getIkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikv",
  })
  @post("{id}")
  static createIkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

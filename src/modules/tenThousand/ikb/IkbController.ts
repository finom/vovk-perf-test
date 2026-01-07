import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikb")
export default class IkbController {
  @operation({
    summary: "Get Ikb",
  })
  @get()
  static getIkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikb",
  })
  @post("{id}")
  static createIkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

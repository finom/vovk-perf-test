import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikz")
export default class IkzController {
  @operation({
    summary: "Get Ikz",
  })
  @get()
  static getIkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikz",
  })
  @post("{id}")
  static createIkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikc")
export default class IkcController {
  @operation({
    summary: "Get Ikc",
  })
  @get()
  static getIkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikc",
  })
  @post("{id}")
  static createIkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

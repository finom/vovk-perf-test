import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikj")
export default class IkjController {
  @operation({
    summary: "Get Ikj",
  })
  @get()
  static getIkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikj",
  })
  @post("{id}")
  static createIkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijj")
export default class IjjController {
  @operation({
    summary: "Get Ijj",
  })
  @get()
  static getIjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijj",
  })
  @post("{id}")
  static createIjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

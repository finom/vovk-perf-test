import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ii")
export default class IiController {
  @operation({
    summary: "Get Ii",
  })
  @get()
  static getIi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ii",
  })
  @post("{id}")
  static createIi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

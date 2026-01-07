import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikh")
export default class IkhController {
  @operation({
    summary: "Get Ikh",
  })
  @get()
  static getIkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikh",
  })
  @post("{id}")
  static createIkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

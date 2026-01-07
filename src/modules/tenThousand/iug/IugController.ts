import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iug")
export default class IugController {
  @operation({
    summary: "Get Iug",
  })
  @get()
  static getIug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iug",
  })
  @post("{id}")
  static createIug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

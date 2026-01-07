import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iei")
export default class IeiController {
  @operation({
    summary: "Get Iei",
  })
  @get()
  static getIei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iei",
  })
  @post("{id}")
  static createIei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

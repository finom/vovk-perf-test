import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijk")
export default class IjkController {
  @operation({
    summary: "Get Ijk",
  })
  @get()
  static getIjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijk",
  })
  @post("{id}")
  static createIjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

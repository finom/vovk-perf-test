import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyg")
export default class IygController {
  @operation({
    summary: "Get Iyg",
  })
  @get()
  static getIyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyg",
  })
  @post("{id}")
  static createIyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

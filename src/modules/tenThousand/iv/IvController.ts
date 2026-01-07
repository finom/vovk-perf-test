import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iv")
export default class IvController {
  @operation({
    summary: "Get Iv",
  })
  @get()
  static getIv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iv",
  })
  @post("{id}")
  static createIv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

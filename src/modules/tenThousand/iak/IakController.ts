import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iak")
export default class IakController {
  @operation({
    summary: "Get Iak",
  })
  @get()
  static getIak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iak",
  })
  @post("{id}")
  static createIak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

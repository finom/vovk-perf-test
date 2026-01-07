import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xu")
export default class XuController {
  @operation({
    summary: "Get Xu",
  })
  @get()
  static getXu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xu",
  })
  @post("{id}")
  static createXu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

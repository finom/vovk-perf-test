import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuw")
export default class KuwController {
  @operation({
    summary: "Get Kuw",
  })
  @get()
  static getKuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuw",
  })
  @post("{id}")
  static createKuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

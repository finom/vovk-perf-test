import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfv")
export default class KfvController {
  @operation({
    summary: "Get Kfv",
  })
  @get()
  static getKfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfv",
  })
  @post("{id}")
  static createKfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

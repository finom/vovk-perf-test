import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koj")
export default class KojController {
  @operation({
    summary: "Get Koj",
  })
  @get()
  static getKoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koj",
  })
  @post("{id}")
  static createKoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kex")
export default class KexController {
  @operation({
    summary: "Get Kex",
  })
  @get()
  static getKex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kex",
  })
  @post("{id}")
  static createKex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

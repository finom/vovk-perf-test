import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcn")
export default class KcnController {
  @operation({
    summary: "Get Kcn",
  })
  @get()
  static getKcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcn",
  })
  @post("{id}")
  static createKcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kta")
export default class KtaController {
  @operation({
    summary: "Get Kta",
  })
  @get()
  static getKta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kta",
  })
  @post("{id}")
  static createKta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

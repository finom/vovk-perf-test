import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kto")
export default class KtoController {
  @operation({
    summary: "Get Kto",
  })
  @get()
  static getKto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kto",
  })
  @post("{id}")
  static createKto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

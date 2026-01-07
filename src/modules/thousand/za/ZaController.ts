import { procedure, prefix, get, post, operation } from "vovk";

@prefix("za")
export default class ZaController {
  @operation({
    summary: "Get Za",
  })
  @get()
  static getZa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Za",
  })
  @post("{id}")
  static createZa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

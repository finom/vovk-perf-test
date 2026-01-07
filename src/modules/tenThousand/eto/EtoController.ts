import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eto")
export default class EtoController {
  @operation({
    summary: "Get Eto",
  })
  @get()
  static getEto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eto",
  })
  @post("{id}")
  static createEto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

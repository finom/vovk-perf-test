import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ena")
export default class EnaController {
  @operation({
    summary: "Get Ena",
  })
  @get()
  static getEna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ena",
  })
  @post("{id}")
  static createEna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

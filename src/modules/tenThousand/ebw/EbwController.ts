import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebw")
export default class EbwController {
  @operation({
    summary: "Get Ebw",
  })
  @get()
  static getEbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebw",
  })
  @post("{id}")
  static createEbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

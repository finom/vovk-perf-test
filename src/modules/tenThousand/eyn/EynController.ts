import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyn")
export default class EynController {
  @operation({
    summary: "Get Eyn",
  })
  @get()
  static getEyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyn",
  })
  @post("{id}")
  static createEyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

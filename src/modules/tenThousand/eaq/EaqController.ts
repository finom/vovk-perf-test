import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaq")
export default class EaqController {
  @operation({
    summary: "Get Eaq",
  })
  @get()
  static getEaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eaq",
  })
  @post("{id}")
  static createEaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

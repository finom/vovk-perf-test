import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaq")
export default class IaqController {
  @operation({
    summary: "Get Iaq",
  })
  @get()
  static getIaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iaq",
  })
  @post("{id}")
  static createIaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

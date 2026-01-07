import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eun")
export default class EunController {
  @operation({
    summary: "Get Eun",
  })
  @get()
  static getEun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eun",
  })
  @post("{id}")
  static createEun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

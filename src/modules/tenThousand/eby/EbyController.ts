import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eby")
export default class EbyController {
  @operation({
    summary: "Get Eby",
  })
  @get()
  static getEby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eby",
  })
  @post("{id}")
  static createEby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eib")
export default class EibController {
  @operation({
    summary: "Get Eib",
  })
  @get()
  static getEib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eib",
  })
  @post("{id}")
  static createEib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

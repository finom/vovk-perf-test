import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ze")
export default class ZeController {
  @operation({
    summary: "Get Ze",
  })
  @get()
  static getZe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ze",
  })
  @post("{id}")
  static createZe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

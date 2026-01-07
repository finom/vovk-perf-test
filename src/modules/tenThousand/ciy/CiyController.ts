import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciy")
export default class CiyController {
  @operation({
    summary: "Get Ciy",
  })
  @get()
  static getCiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ciy",
  })
  @post("{id}")
  static createCiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

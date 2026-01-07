import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ice")
export default class IceController {
  @operation({
    summary: "Get Ice",
  })
  @get()
  static getIce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ice",
  })
  @post("{id}")
  static createIce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihw")
export default class IhwController {
  @operation({
    summary: "Get Ihw",
  })
  @get()
  static getIhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihw",
  })
  @post("{id}")
  static createIhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

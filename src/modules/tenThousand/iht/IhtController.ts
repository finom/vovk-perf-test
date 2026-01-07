import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iht")
export default class IhtController {
  @operation({
    summary: "Get Iht",
  })
  @get()
  static getIht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iht",
  })
  @post("{id}")
  static createIht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

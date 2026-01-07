import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iip")
export default class IipController {
  @operation({
    summary: "Get Iip",
  })
  @get()
  static getIip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iip",
  })
  @post("{id}")
  static createIip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

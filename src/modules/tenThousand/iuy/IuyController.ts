import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuy")
export default class IuyController {
  @operation({
    summary: "Get Iuy",
  })
  @get()
  static getIuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuy",
  })
  @post("{id}")
  static createIuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

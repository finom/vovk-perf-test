import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itu")
export default class ItuController {
  @operation({
    summary: "Get Itu",
  })
  @get()
  static getItu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itu",
  })
  @post("{id}")
  static createItu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

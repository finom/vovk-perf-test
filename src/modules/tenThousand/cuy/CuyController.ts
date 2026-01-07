import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuy")
export default class CuyController {
  @operation({
    summary: "Get Cuy",
  })
  @get()
  static getCuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuy",
  })
  @post("{id}")
  static createCuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

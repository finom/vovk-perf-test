import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iih")
export default class IihController {
  @operation({
    summary: "Get Iih",
  })
  @get()
  static getIih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iih",
  })
  @post("{id}")
  static createIih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

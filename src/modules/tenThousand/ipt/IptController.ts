import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipt")
export default class IptController {
  @operation({
    summary: "Get Ipt",
  })
  @get()
  static getIpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipt",
  })
  @post("{id}")
  static createIpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

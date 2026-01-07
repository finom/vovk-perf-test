import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kip")
export default class KipController {
  @operation({
    summary: "Get Kip",
  })
  @get()
  static getKip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kip",
  })
  @post("{id}")
  static createKip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

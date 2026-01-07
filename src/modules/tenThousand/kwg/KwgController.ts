import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwg")
export default class KwgController {
  @operation({
    summary: "Get Kwg",
  })
  @get()
  static getKwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwg",
  })
  @post("{id}")
  static createKwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

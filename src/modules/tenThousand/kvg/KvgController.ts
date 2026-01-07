import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvg")
export default class KvgController {
  @operation({
    summary: "Get Kvg",
  })
  @get()
  static getKvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvg",
  })
  @post("{id}")
  static createKvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

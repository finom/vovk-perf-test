import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixy")
export default class IxyController {
  @operation({
    summary: "Get Ixy",
  })
  @get()
  static getIxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixy",
  })
  @post("{id}")
  static createIxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

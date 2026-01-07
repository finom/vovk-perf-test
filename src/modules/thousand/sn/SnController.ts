import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sn")
export default class SnController {
  @operation({
    summary: "Get Sn",
  })
  @get()
  static getSn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sn",
  })
  @post("{id}")
  static createSn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

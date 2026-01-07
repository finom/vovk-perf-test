import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rp")
export default class RpController {
  @operation({
    summary: "Get Rp",
  })
  @get()
  static getRp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rp",
  })
  @post("{id}")
  static createRp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

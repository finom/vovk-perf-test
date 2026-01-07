import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mac")
export default class MacController {
  @operation({
    summary: "Get Mac",
  })
  @get()
  static getMac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mac",
  })
  @post("{id}")
  static createMac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

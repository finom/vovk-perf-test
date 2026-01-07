import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dld")
export default class DldController {
  @operation({
    summary: "Get Dld",
  })
  @get()
  static getDld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dld",
  })
  @post("{id}")
  static createDld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

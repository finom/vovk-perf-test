import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bps")
export default class BpsController {
  @operation({
    summary: "Get Bps",
  })
  @get()
  static getBps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bps",
  })
  @post("{id}")
  static createBps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

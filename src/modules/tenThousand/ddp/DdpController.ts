import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddp")
export default class DdpController {
  @operation({
    summary: "Get Ddp",
  })
  @get()
  static getDdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddp",
  })
  @post("{id}")
  static createDdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

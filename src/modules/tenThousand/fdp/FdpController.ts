import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdp")
export default class FdpController {
  @operation({
    summary: "Get Fdp",
  })
  @get()
  static getFdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdp",
  })
  @post("{id}")
  static createFdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

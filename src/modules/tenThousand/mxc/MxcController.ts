import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxc")
export default class MxcController {
  @operation({
    summary: "Get Mxc",
  })
  @get()
  static getMxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxc",
  })
  @post("{id}")
  static createMxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

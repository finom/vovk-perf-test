import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpu")
export default class BpuController {
  @operation({
    summary: "Get Bpu",
  })
  @get()
  static getBpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpu",
  })
  @post("{id}")
  static createBpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npu")
export default class NpuController {
  @operation({
    summary: "Get Npu",
  })
  @get()
  static getNpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npu",
  })
  @post("{id}")
  static createNpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

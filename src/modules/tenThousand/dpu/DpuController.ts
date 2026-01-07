import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpu")
export default class DpuController {
  @operation({
    summary: "Get Dpu",
  })
  @get()
  static getDpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpu",
  })
  @post("{id}")
  static createDpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

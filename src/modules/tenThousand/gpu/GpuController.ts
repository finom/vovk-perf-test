import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpu")
export default class GpuController {
  @operation({
    summary: "Get Gpu",
  })
  @get()
  static getGpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpu",
  })
  @post("{id}")
  static createGpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

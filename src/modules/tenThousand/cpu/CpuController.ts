import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpu")
export default class CpuController {
  @operation({
    summary: "Get Cpu",
  })
  @get()
  static getCpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpu",
  })
  @post("{id}")
  static createCpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

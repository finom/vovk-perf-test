import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipu")
export default class IpuController {
  @operation({
    summary: "Get Ipu",
  })
  @get()
  static getIpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipu",
  })
  @post("{id}")
  static createIpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

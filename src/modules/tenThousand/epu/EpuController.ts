import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epu")
export default class EpuController {
  @operation({
    summary: "Get Epu",
  })
  @get()
  static getEpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epu",
  })
  @post("{id}")
  static createEpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

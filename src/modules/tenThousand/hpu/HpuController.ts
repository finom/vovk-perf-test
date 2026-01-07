import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpu")
export default class HpuController {
  @operation({
    summary: "Get Hpu",
  })
  @get()
  static getHpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpu",
  })
  @post("{id}")
  static createHpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

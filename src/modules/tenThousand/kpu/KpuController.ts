import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpu")
export default class KpuController {
  @operation({
    summary: "Get Kpu",
  })
  @get()
  static getKpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpu",
  })
  @post("{id}")
  static createKpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

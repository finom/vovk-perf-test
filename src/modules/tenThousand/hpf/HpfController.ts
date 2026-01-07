import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpf")
export default class HpfController {
  @operation({
    summary: "Get Hpf",
  })
  @get()
  static getHpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpf",
  })
  @post("{id}")
  static createHpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

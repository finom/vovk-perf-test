import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpf")
export default class KpfController {
  @operation({
    summary: "Get Kpf",
  })
  @get()
  static getKpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpf",
  })
  @post("{id}")
  static createKpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

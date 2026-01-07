import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpf")
export default class BpfController {
  @operation({
    summary: "Get Bpf",
  })
  @get()
  static getBpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpf",
  })
  @post("{id}")
  static createBpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

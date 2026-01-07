import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpf")
export default class DpfController {
  @operation({
    summary: "Get Dpf",
  })
  @get()
  static getDpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpf",
  })
  @post("{id}")
  static createDpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

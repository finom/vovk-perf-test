import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npf")
export default class NpfController {
  @operation({
    summary: "Get Npf",
  })
  @get()
  static getNpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npf",
  })
  @post("{id}")
  static createNpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

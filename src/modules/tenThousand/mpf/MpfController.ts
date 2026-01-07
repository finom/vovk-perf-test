import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpf")
export default class MpfController {
  @operation({
    summary: "Get Mpf",
  })
  @get()
  static getMpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpf",
  })
  @post("{id}")
  static createMpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

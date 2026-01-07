import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpf")
export default class LpfController {
  @operation({
    summary: "Get Lpf",
  })
  @get()
  static getLpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpf",
  })
  @post("{id}")
  static createLpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

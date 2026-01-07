import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpf")
export default class FpfController {
  @operation({
    summary: "Get Fpf",
  })
  @get()
  static getFpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpf",
  })
  @post("{id}")
  static createFpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

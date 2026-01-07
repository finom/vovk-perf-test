import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmf")
export default class FmfController {
  @operation({
    summary: "Get Fmf",
  })
  @get()
  static getFmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmf",
  })
  @post("{id}")
  static createFmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmf")
export default class LmfController {
  @operation({
    summary: "Get Lmf",
  })
  @get()
  static getLmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmf",
  })
  @post("{id}")
  static createLmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

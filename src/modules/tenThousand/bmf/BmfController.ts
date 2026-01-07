import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmf")
export default class BmfController {
  @operation({
    summary: "Get Bmf",
  })
  @get()
  static getBmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmf",
  })
  @post("{id}")
  static createBmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

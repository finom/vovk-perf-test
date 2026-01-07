import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsa")
export default class DsaController {
  @operation({
    summary: "Get Dsa",
  })
  @get()
  static getDsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsa",
  })
  @post("{id}")
  static createDsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

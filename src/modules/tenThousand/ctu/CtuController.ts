import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctu")
export default class CtuController {
  @operation({
    summary: "Get Ctu",
  })
  @get()
  static getCtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctu",
  })
  @post("{id}")
  static createCtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

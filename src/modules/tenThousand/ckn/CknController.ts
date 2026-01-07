import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckn")
export default class CknController {
  @operation({
    summary: "Get Ckn",
  })
  @get()
  static getCkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckn",
  })
  @post("{id}")
  static createCkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

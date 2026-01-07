import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cek")
export default class CekController {
  @operation({
    summary: "Get Cek",
  })
  @get()
  static getCek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cek",
  })
  @post("{id}")
  static createCek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

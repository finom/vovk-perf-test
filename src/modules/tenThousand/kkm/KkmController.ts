import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkm")
export default class KkmController {
  @operation({
    summary: "Get Kkm",
  })
  @get()
  static getKkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkm",
  })
  @post("{id}")
  static createKkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

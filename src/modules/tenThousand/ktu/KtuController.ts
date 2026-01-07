import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktu")
export default class KtuController {
  @operation({
    summary: "Get Ktu",
  })
  @get()
  static getKtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktu",
  })
  @post("{id}")
  static createKtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

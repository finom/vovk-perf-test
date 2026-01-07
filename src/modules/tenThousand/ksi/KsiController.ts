import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksi")
export default class KsiController {
  @operation({
    summary: "Get Ksi",
  })
  @get()
  static getKsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksi",
  })
  @post("{id}")
  static createKsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

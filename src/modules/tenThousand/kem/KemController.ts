import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kem")
export default class KemController {
  @operation({
    summary: "Get Kem",
  })
  @get()
  static getKem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kem",
  })
  @post("{id}")
  static createKem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

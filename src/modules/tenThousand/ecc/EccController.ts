import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecc")
export default class EccController {
  @operation({
    summary: "Get Ecc",
  })
  @get()
  static getEcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecc",
  })
  @post("{id}")
  static createEcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

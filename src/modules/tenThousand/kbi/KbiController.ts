import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbi")
export default class KbiController {
  @operation({
    summary: "Get Kbi",
  })
  @get()
  static getKbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbi",
  })
  @post("{id}")
  static createKbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

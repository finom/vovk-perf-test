import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpp")
export default class KppController {
  @operation({
    summary: "Get Kpp",
  })
  @get()
  static getKpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpp",
  })
  @post("{id}")
  static createKpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

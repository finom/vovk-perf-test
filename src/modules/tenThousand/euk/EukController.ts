import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euk")
export default class EukController {
  @operation({
    summary: "Get Euk",
  })
  @get()
  static getEuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euk",
  })
  @post("{id}")
  static createEuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

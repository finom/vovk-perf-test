import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etu")
export default class EtuController {
  @operation({
    summary: "Get Etu",
  })
  @get()
  static getEtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etu",
  })
  @post("{id}")
  static createEtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

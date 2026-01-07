import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iva")
export default class IvaController {
  @operation({
    summary: "Get Iva",
  })
  @get()
  static getIva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iva",
  })
  @post("{id}")
  static createIva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

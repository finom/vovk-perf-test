import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekr")
export default class EkrController {
  @operation({
    summary: "Get Ekr",
  })
  @get()
  static getEkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekr",
  })
  @post("{id}")
  static createEkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

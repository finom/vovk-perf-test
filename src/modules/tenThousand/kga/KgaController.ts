import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kga")
export default class KgaController {
  @operation({
    summary: "Get Kga",
  })
  @get()
  static getKga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kga",
  })
  @post("{id}")
  static createKga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

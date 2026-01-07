import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kra")
export default class KraController {
  @operation({
    summary: "Get Kra",
  })
  @get()
  static getKra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kra",
  })
  @post("{id}")
  static createKra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

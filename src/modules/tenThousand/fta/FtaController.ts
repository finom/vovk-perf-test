import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fta")
export default class FtaController {
  @operation({
    summary: "Get Fta",
  })
  @get()
  static getFta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fta",
  })
  @post("{id}")
  static createFta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

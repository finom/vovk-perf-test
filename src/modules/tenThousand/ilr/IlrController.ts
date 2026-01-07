import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilr")
export default class IlrController {
  @operation({
    summary: "Get Ilr",
  })
  @get()
  static getIlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilr",
  })
  @post("{id}")
  static createIlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

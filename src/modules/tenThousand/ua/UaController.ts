import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ua")
export default class UaController {
  @operation({
    summary: "Get Ua",
  })
  @get()
  static getUa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ua",
  })
  @post("{id}")
  static createUa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

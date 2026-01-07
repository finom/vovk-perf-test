import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuv")
export default class CuvController {
  @operation({
    summary: "Get Cuv",
  })
  @get()
  static getCuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuv",
  })
  @post("{id}")
  static createCuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

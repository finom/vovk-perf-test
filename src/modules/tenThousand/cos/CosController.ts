import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cos")
export default class CosController {
  @operation({
    summary: "Get Cos",
  })
  @get()
  static getCos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cos",
  })
  @post("{id}")
  static createCos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

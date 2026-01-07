import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fea")
export default class FeaController {
  @operation({
    summary: "Get Fea",
  })
  @get()
  static getFea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fea",
  })
  @post("{id}")
  static createFea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

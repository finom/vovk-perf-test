import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knn")
export default class KnnController {
  @operation({
    summary: "Get Knn",
  })
  @get()
  static getKnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knn",
  })
  @post("{id}")
  static createKnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

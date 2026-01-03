import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knns")
export default class KnnController {
  @operation({
    summary: "Get Knns",
  })
  @get()
  static getKnns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knn",
  })
  @post("{id}")
  static createKnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

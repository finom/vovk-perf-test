import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feas")
export default class FeaController {
  @operation({
    summary: "Get Feas",
  })
  @get()
  static getFeas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fea",
  })
  @post("{id}")
  static createFea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

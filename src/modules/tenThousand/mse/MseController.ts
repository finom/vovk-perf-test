import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mses")
export default class MseController {
  @operation({
    summary: "Get Mses",
  })
  @get()
  static getMses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mse",
  })
  @post("{id}")
  static createMse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

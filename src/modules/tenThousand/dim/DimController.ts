import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dims")
export default class DimController {
  @operation({
    summary: "Get Dims",
  })
  @get()
  static getDims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dim",
  })
  @post("{id}")
  static createDim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

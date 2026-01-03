import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuds")
export default class CudController {
  @operation({
    summary: "Get Cuds",
  })
  @get()
  static getCuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cud",
  })
  @post("{id}")
  static createCud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

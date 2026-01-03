import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crs")
export default class CrsController {
  @operation({
    summary: "Get Crs",
  })
  @get()
  static getCrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crs",
  })
  @post("{id}")
  static createCrs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

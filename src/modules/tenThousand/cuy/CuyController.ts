import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuys")
export default class CuyController {
  @operation({
    summary: "Get Cuys",
  })
  @get()
  static getCuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuy",
  })
  @post("{id}")
  static createCuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

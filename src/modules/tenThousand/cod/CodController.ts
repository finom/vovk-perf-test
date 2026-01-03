import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cod")
export default class CodController {
  @operation({
    summary: "Get Cod",
  })
  @get()
  static getCod = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cod",
  })
  @post("{id}")
  static createCod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

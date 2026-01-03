import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilzs")
export default class IlzController {
  @operation({
    summary: "Get Ilzs",
  })
  @get()
  static getIlzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilz",
  })
  @post("{id}")
  static createIlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

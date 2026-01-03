import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwis")
export default class GwiController {
  @operation({
    summary: "Get Gwis",
  })
  @get()
  static getGwis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwi",
  })
  @post("{id}")
  static createGwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

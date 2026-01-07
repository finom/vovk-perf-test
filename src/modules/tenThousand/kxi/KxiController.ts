import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxi")
export default class KxiController {
  @operation({
    summary: "Get Kxi",
  })
  @get()
  static getKxi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxi",
  })
  @post("{id}")
  static createKxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

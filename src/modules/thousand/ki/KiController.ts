import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ki")
export default class KiController {
  @operation({
    summary: "Get Ki",
  })
  @get()
  static getKi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ki",
  })
  @post("{id}")
  static createKi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epes")
export default class EpeController {
  @operation({
    summary: "Get Epes",
  })
  @get()
  static getEpes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epe",
  })
  @post("{id}")
  static createEpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

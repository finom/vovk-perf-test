import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eez")
export default class EezController {
  @operation({
    summary: "Get Eez",
  })
  @get()
  static getEez = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eez",
  })
  @post("{id}")
  static createEez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

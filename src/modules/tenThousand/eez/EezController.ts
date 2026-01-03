import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eezs")
export default class EezController {
  @operation({
    summary: "Get Eezs",
  })
  @get()
  static getEezs = procedure({
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

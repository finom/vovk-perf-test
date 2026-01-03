import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ugs")
export default class UgController {
  @operation({
    summary: "Get Ugs",
  })
  @get()
  static getUgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ug",
  })
  @post("{id}")
  static createUg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

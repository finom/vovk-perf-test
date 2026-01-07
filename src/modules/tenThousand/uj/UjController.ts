import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uj")
export default class UjController {
  @operation({
    summary: "Get Uj",
  })
  @get()
  static getUj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uj",
  })
  @post("{id}")
  static createUj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

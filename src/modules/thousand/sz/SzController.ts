import { procedure, prefix, get, post, operation } from "vovk";

@prefix("szs")
export default class SzController {
  @operation({
    summary: "Get Szs",
  })
  @get()
  static getSzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sz",
  })
  @post("{id}")
  static createSz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

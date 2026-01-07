import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cug")
export default class CugController {
  @operation({
    summary: "Get Cug",
  })
  @get()
  static getCug = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cug",
  })
  @post("{id}")
  static createCug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

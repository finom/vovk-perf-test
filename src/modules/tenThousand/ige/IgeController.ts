import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ige")
export default class IgeController {
  @operation({
    summary: "Get Ige",
  })
  @get()
  static getIge = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ige",
  })
  @post("{id}")
  static createIge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

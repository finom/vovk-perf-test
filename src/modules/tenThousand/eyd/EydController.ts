import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyds")
export default class EydController {
  @operation({
    summary: "Get Eyds",
  })
  @get()
  static getEyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyd",
  })
  @post("{id}")
  static createEyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

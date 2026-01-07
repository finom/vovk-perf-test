import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ae")
export default class AeController {
  @operation({
    summary: "Get Ae",
  })
  @get()
  static getAe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ae",
  })
  @post("{id}")
  static createAe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aff")
export default class AffController {
  @operation({
    summary: "Get Aff",
  })
  @get()
  static getAff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aff",
  })
  @post("{id}")
  static createAff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

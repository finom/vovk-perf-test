import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edb")
export default class EdbController {
  @operation({
    summary: "Get Edb",
  })
  @get()
  static getEdb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edb",
  })
  @post("{id}")
  static createEdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edbs")
export default class EdbController {
  @operation({
    summary: "Get Edbs",
  })
  @get()
  static getEdbs = procedure({
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

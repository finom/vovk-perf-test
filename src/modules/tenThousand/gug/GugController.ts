import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gugs")
export default class GugController {
  @operation({
    summary: "Get Gugs",
  })
  @get()
  static getGugs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gug",
  })
  @post("{id}")
  static createGug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

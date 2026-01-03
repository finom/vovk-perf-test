import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eses")
export default class EseController {
  @operation({
    summary: "Get Eses",
  })
  @get()
  static getEses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ese",
  })
  @post("{id}")
  static createEse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

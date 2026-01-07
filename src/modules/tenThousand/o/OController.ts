import { procedure, prefix, get, post, operation } from "vovk";

@prefix("o")
export default class OController {
  @operation({
    summary: "Get O",
  })
  @get()
  static getO = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create O",
  })
  @post("{id}")
  static createO = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

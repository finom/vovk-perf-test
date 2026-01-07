import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikz")
export default class IkzController {
  @operation({
    summary: "Get Ikz",
  })
  @get()
  static getIkz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikz",
  })
  @post("{id}")
  static createIkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

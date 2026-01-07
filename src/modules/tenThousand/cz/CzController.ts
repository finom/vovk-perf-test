import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cz")
export default class CzController {
  @operation({
    summary: "Get Cz",
  })
  @get()
  static getCz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cz",
  })
  @post("{id}")
  static createCz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

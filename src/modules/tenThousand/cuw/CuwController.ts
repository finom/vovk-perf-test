import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuws")
export default class CuwController {
  @operation({
    summary: "Get Cuws",
  })
  @get()
  static getCuws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuw",
  })
  @post("{id}")
  static createCuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

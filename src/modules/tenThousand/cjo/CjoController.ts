import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjo")
export default class CjoController {
  @operation({
    summary: "Get Cjo",
  })
  @get()
  static getCjo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjo",
  })
  @post("{id}")
  static createCjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

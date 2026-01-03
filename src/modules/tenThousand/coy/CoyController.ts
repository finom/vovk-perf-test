import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coys")
export default class CoyController {
  @operation({
    summary: "Get Coys",
  })
  @get()
  static getCoys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coy",
  })
  @post("{id}")
  static createCoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coy")
export default class CoyController {
  @operation({
    summary: "Get Coy",
  })
  @get()
  static getCoy = procedure({
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

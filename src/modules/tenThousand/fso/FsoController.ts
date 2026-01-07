import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fso")
export default class FsoController {
  @operation({
    summary: "Get Fso",
  })
  @get()
  static getFso = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fso",
  })
  @post("{id}")
  static createFso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

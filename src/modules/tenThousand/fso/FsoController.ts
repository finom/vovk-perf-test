import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsos")
export default class FsoController {
  @operation({
    summary: "Get Fsos",
  })
  @get()
  static getFsos = procedure({
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

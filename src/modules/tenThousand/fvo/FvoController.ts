import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvos")
export default class FvoController {
  @operation({
    summary: "Get Fvos",
  })
  @get()
  static getFvos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvo",
  })
  @post("{id}")
  static createFvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cza")
export default class CzaController {
  @operation({
    summary: "Get Cza",
  })
  @get()
  static getCza = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cza",
  })
  @post("{id}")
  static createCza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

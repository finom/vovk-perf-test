import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gza")
export default class GzaController {
  @operation({
    summary: "Get Gza",
  })
  @get()
  static getGza = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gza",
  })
  @post("{id}")
  static createGza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

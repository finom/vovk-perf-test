import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gea")
export default class GeaController {
  @operation({
    summary: "Get Gea",
  })
  @get()
  static getGea = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gea",
  })
  @post("{id}")
  static createGea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

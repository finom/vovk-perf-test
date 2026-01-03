import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ges")
export default class GeController {
  @operation({
    summary: "Get Ges",
  })
  @get()
  static getGes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ge",
  })
  @post("{id}")
  static createGe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

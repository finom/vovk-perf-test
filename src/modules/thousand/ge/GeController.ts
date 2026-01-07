import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ge")
export default class GeController {
  @operation({
    summary: "Get Ge",
  })
  @get()
  static getGe = procedure({
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

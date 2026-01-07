import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gla")
export default class GlaController {
  @operation({
    summary: "Get Gla",
  })
  @get()
  static getGla = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gla",
  })
  @post("{id}")
  static createGla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

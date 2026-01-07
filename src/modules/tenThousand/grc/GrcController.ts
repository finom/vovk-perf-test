import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grc")
export default class GrcController {
  @operation({
    summary: "Get Grc",
  })
  @get()
  static getGrc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grc",
  })
  @post("{id}")
  static createGrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

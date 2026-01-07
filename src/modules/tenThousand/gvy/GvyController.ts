import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvy")
export default class GvyController {
  @operation({
    summary: "Get Gvy",
  })
  @get()
  static getGvy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvy",
  })
  @post("{id}")
  static createGvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

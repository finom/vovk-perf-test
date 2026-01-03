import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ds")
export default class DController {
  @operation({
    summary: "Get DS",
  })
  @get()
  static getDS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create D",
  })
  @post("{id}")
  static createD = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

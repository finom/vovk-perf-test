import { procedure, prefix, get, post, operation } from "vovk";

@prefix("or")
export default class OrController {
  @operation({
    summary: "Get Or",
  })
  @get()
  static getOr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Or",
  })
  @post("{id}")
  static createOr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

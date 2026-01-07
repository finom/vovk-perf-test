import { procedure, prefix, get, post, operation } from "vovk";

@prefix("and")
export default class AndController {
  @operation({
    summary: "Get And",
  })
  @get()
  static getAnd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create And",
  })
  @post("{id}")
  static createAnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

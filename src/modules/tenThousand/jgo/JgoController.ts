import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgo")
export default class JgoController {
  @operation({
    summary: "Get Jgo",
  })
  @get()
  static getJgo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgo",
  })
  @post("{id}")
  static createJgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

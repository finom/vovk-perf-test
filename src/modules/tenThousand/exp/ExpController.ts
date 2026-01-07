import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exp")
export default class ExpController {
  @operation({
    summary: "Get Exp",
  })
  @get()
  static getExp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exp",
  })
  @post("{id}")
  static createExp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

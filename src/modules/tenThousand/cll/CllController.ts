import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clls")
export default class CllController {
  @operation({
    summary: "Get Clls",
  })
  @get()
  static getClls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cll",
  })
  @post("{id}")
  static createCll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijt")
export default class IjtController {
  @operation({
    summary: "Get Ijt",
  })
  @get()
  static getIjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijt",
  })
  @post("{id}")
  static createIjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

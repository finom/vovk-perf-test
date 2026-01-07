import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghu")
export default class GhuController {
  @operation({
    summary: "Get Ghu",
  })
  @get()
  static getGhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghu",
  })
  @post("{id}")
  static createGhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

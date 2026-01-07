import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gll")
export default class GllController {
  @operation({
    summary: "Get Gll",
  })
  @get()
  static getGll = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gll",
  })
  @post("{id}")
  static createGll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

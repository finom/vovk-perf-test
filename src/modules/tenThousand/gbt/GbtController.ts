import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbt")
export default class GbtController {
  @operation({
    summary: "Get Gbt",
  })
  @get()
  static getGbt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbt",
  })
  @post("{id}")
  static createGbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

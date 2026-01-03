import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmos")
export default class HmoController {
  @operation({
    summary: "Get Hmos",
  })
  @get()
  static getHmos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmo",
  })
  @post("{id}")
  static createHmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

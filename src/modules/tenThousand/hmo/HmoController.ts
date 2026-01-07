import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmo")
export default class HmoController {
  @operation({
    summary: "Get Hmo",
  })
  @get()
  static getHmo = procedure({
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

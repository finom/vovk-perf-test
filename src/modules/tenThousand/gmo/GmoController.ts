import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmo")
export default class GmoController {
  @operation({
    summary: "Get Gmo",
  })
  @get()
  static getGmo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmo",
  })
  @post("{id}")
  static createGmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

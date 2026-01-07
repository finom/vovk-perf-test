import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmo")
export default class LmoController {
  @operation({
    summary: "Get Lmo",
  })
  @get()
  static getLmo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmo",
  })
  @post("{id}")
  static createLmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

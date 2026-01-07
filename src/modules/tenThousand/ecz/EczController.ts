import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecz")
export default class EczController {
  @operation({
    summary: "Get Ecz",
  })
  @get()
  static getEcz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecz",
  })
  @post("{id}")
  static createEcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

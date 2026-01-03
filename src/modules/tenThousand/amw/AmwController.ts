import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amws")
export default class AmwController {
  @operation({
    summary: "Get Amws",
  })
  @get()
  static getAmws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amw",
  })
  @post("{id}")
  static createAmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

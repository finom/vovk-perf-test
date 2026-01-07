import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amw")
export default class AmwController {
  @operation({
    summary: "Get Amw",
  })
  @get()
  static getAmw = procedure({
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

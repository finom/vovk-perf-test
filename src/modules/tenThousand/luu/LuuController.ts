import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luus")
export default class LuuController {
  @operation({
    summary: "Get Luus",
  })
  @get()
  static getLuus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luu",
  })
  @post("{id}")
  static createLuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geys")
export default class GeyController {
  @operation({
    summary: "Get Geys",
  })
  @get()
  static getGeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gey",
  })
  @post("{id}")
  static createGey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihbs")
export default class IhbController {
  @operation({
    summary: "Get Ihbs",
  })
  @get()
  static getIhbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihb",
  })
  @post("{id}")
  static createIhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

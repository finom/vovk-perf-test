import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehbs")
export default class EhbController {
  @operation({
    summary: "Get Ehbs",
  })
  @get()
  static getEhbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehb",
  })
  @post("{id}")
  static createEhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

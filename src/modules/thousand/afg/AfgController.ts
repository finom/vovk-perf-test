import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afgs")
export default class AfgController {
  @operation({
    summary: "Get Afgs",
  })
  @get()
  static getAfgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afg",
  })
  @post("{id}")
  static createAfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

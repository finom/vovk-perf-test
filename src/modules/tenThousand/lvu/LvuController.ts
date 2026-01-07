import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvu")
export default class LvuController {
  @operation({
    summary: "Get Lvu",
  })
  @get()
  static getLvu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvu",
  })
  @post("{id}")
  static createLvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laj")
export default class LajController {
  @operation({
    summary: "Get Laj",
  })
  @get()
  static getLaj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Laj",
  })
  @post("{id}")
  static createLaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

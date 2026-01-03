import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmbs")
export default class LmbController {
  @operation({
    summary: "Get Lmbs",
  })
  @get()
  static getLmbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmb",
  })
  @post("{id}")
  static createLmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

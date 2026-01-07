import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekl")
export default class EklController {
  @operation({
    summary: "Get Ekl",
  })
  @get()
  static getEkl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekl",
  })
  @post("{id}")
  static createEkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

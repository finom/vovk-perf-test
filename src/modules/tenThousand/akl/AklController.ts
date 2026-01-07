import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akl")
export default class AklController {
  @operation({
    summary: "Get Akl",
  })
  @get()
  static getAkl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akl",
  })
  @post("{id}")
  static createAkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

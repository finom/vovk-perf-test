import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afm")
export default class AfmController {
  @operation({
    summary: "Get Afm",
  })
  @get()
  static getAfm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afm",
  })
  @post("{id}")
  static createAfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sbs")
export default class SbController {
  @operation({
    summary: "Get Sbs",
  })
  @get()
  static getSbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sb",
  })
  @post("{id}")
  static createSb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

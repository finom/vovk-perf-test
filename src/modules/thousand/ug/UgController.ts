import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ug")
export default class UgController {
  @operation({
    summary: "Get Ug",
  })
  @get()
  static getUg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ug",
  })
  @post("{id}")
  static createUg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

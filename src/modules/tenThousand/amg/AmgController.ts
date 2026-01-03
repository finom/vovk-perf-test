import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amgs")
export default class AmgController {
  @operation({
    summary: "Get Amgs",
  })
  @get()
  static getAmgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amg",
  })
  @post("{id}")
  static createAmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

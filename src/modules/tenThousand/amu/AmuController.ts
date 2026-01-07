import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amu")
export default class AmuController {
  @operation({
    summary: "Get Amu",
  })
  @get()
  static getAmu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amu",
  })
  @post("{id}")
  static createAmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

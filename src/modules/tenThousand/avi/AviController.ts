import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avis")
export default class AviController {
  @operation({
    summary: "Get Avis",
  })
  @get()
  static getAvis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avi",
  })
  @post("{id}")
  static createAvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

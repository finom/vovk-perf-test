import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eik")
export default class EikController {
  @operation({
    summary: "Get Eik",
  })
  @get()
  static getEik = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eik",
  })
  @post("{id}")
  static createEik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

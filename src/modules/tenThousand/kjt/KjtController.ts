import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjt")
export default class KjtController {
  @operation({
    summary: "Get Kjt",
  })
  @get()
  static getKjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjt",
  })
  @post("{id}")
  static createKjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kegs")
export default class KegController {
  @operation({
    summary: "Get Kegs",
  })
  @get()
  static getKegs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Keg",
  })
  @post("{id}")
  static createKeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

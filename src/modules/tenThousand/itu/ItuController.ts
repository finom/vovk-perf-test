import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itus")
export default class ItuController {
  @operation({
    summary: "Get Itus",
  })
  @get()
  static getItus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itu",
  })
  @post("{id}")
  static createItu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

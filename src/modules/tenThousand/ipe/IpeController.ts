import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipes")
export default class IpeController {
  @operation({
    summary: "Get Ipes",
  })
  @get()
  static getIpes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipe",
  })
  @post("{id}")
  static createIpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

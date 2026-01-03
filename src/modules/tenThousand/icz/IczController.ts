import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iczs")
export default class IczController {
  @operation({
    summary: "Get Iczs",
  })
  @get()
  static getIczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icz",
  })
  @post("{id}")
  static createIcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

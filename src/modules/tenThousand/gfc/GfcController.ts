import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfc")
export default class GfcController {
  @operation({
    summary: "Get Gfc",
  })
  @get()
  static getGfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfc",
  })
  @post("{id}")
  static createGfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

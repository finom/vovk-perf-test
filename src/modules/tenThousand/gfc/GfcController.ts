import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfcs")
export default class GfcController {
  @operation({
    summary: "Get Gfcs",
  })
  @get()
  static getGfcs = procedure({
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

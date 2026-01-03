import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cips")
export default class CipController {
  @operation({
    summary: "Get Cips",
  })
  @get()
  static getCips = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cip",
  })
  @post("{id}")
  static createCip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

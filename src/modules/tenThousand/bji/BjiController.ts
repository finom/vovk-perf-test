import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bji")
export default class BjiController {
  @operation({
    summary: "Get Bji",
  })
  @get()
  static getBji = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bji",
  })
  @post("{id}")
  static createBji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjis")
export default class BjiController {
  @operation({
    summary: "Get Bjis",
  })
  @get()
  static getBjis = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcc")
export default class HccController {
  @operation({
    summary: "Get Hcc",
  })
  @get()
  static getHcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcc",
  })
  @post("{id}")
  static createHcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

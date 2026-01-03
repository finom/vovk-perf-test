import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bips")
export default class BipController {
  @operation({
    summary: "Get Bips",
  })
  @get()
  static getBips = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bip",
  })
  @post("{id}")
  static createBip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

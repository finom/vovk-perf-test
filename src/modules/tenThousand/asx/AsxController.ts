import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asx")
export default class AsxController {
  @operation({
    summary: "Get Asx",
  })
  @get()
  static getAsx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asx",
  })
  @post("{id}")
  static createAsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

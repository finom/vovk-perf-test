import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flxes")
export default class FlxController {
  @operation({
    summary: "Get Flxes",
  })
  @get()
  static getFlxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flx",
  })
  @post("{id}")
  static createFlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

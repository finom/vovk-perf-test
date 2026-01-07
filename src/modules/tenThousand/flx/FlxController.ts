import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flx")
export default class FlxController {
  @operation({
    summary: "Get Flx",
  })
  @get()
  static getFlx = procedure({
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

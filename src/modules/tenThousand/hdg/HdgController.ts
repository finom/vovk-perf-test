import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdg")
export default class HdgController {
  @operation({
    summary: "Get Hdg",
  })
  @get()
  static getHdg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdg",
  })
  @post("{id}")
  static createHdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

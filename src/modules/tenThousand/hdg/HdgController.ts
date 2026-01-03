import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdgs")
export default class HdgController {
  @operation({
    summary: "Get Hdgs",
  })
  @get()
  static getHdgs = procedure({
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

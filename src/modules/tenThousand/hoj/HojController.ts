import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoj")
export default class HojController {
  @operation({
    summary: "Get Hoj",
  })
  @get()
  static getHoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoj",
  })
  @post("{id}")
  static createHoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

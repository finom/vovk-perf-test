import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdo")
export default class HdoController {
  @operation({
    summary: "Get Hdo",
  })
  @get()
  static getHdo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdo",
  })
  @post("{id}")
  static createHdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eon")
export default class EonController {
  @operation({
    summary: "Get Eon",
  })
  @get()
  static getEon = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eon",
  })
  @post("{id}")
  static createEon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

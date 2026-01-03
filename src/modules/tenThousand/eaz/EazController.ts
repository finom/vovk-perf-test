import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eazs")
export default class EazController {
  @operation({
    summary: "Get Eazs",
  })
  @get()
  static getEazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaz",
  })
  @post("{id}")
  static createEaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

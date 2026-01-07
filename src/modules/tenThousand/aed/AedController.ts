import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aed")
export default class AedController {
  @operation({
    summary: "Get Aed",
  })
  @get()
  static getAed = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aed",
  })
  @post("{id}")
  static createAed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

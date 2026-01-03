import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eues")
export default class EueController {
  @operation({
    summary: "Get Eues",
  })
  @get()
  static getEues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eue",
  })
  @post("{id}")
  static createEue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

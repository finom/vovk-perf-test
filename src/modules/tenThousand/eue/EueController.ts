import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eue")
export default class EueController {
  @operation({
    summary: "Get Eue",
  })
  @get()
  static getEue = procedure({
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

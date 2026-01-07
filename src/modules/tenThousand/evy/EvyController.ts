import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evy")
export default class EvyController {
  @operation({
    summary: "Get Evy",
  })
  @get()
  static getEvy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evy",
  })
  @post("{id}")
  static createEvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

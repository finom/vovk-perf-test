import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evu")
export default class EvuController {
  @operation({
    summary: "Get Evu",
  })
  @get()
  static getEvu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evu",
  })
  @post("{id}")
  static createEvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

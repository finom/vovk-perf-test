import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evus")
export default class EvuController {
  @operation({
    summary: "Get Evus",
  })
  @get()
  static getEvus = procedure({
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

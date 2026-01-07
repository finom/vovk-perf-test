import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eau")
export default class EauController {
  @operation({
    summary: "Get Eau",
  })
  @get()
  static getEau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eau",
  })
  @post("{id}")
  static createEau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

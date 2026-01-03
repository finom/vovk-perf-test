import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaus")
export default class EauController {
  @operation({
    summary: "Get Eaus",
  })
  @get()
  static getEaus = procedure({
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

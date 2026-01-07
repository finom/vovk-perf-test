import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eog")
export default class EogController {
  @operation({
    summary: "Get Eog",
  })
  @get()
  static getEog = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eog",
  })
  @post("{id}")
  static createEog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

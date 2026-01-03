import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eogs")
export default class EogController {
  @operation({
    summary: "Get Eogs",
  })
  @get()
  static getEogs = procedure({
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

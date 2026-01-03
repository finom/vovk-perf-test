import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amos")
export default class AmoController {
  @operation({
    summary: "Get Amos",
  })
  @get()
  static getAmos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amo",
  })
  @post("{id}")
  static createAmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amo")
export default class AmoController {
  @operation({
    summary: "Get Amo",
  })
  @get()
  static getAmo = procedure({
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

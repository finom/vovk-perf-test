import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ape")
export default class ApeController {
  @operation({
    summary: "Get Ape",
  })
  @get()
  static getApe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ape",
  })
  @post("{id}")
  static createApe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

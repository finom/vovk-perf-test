import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frxes")
export default class FrxController {
  @operation({
    summary: "Get Frxes",
  })
  @get()
  static getFrxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frx",
  })
  @post("{id}")
  static createFrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

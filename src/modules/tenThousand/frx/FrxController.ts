import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frx")
export default class FrxController {
  @operation({
    summary: "Get Frx",
  })
  @get()
  static getFrx = procedure({
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

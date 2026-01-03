import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frvs")
export default class FrvController {
  @operation({
    summary: "Get Frvs",
  })
  @get()
  static getFrvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frv",
  })
  @post("{id}")
  static createFrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

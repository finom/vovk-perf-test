import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaes")
export default class GaeController {
  @operation({
    summary: "Get Gaes",
  })
  @get()
  static getGaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gae",
  })
  @post("{id}")
  static createGae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

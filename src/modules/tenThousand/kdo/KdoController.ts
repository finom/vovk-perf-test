import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdos")
export default class KdoController {
  @operation({
    summary: "Get Kdos",
  })
  @get()
  static getKdos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdo",
  })
  @post("{id}")
  static createKdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

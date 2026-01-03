import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eras")
export default class EraController {
  @operation({
    summary: "Get Eras",
  })
  @get()
  static getEras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Era",
  })
  @post("{id}")
  static createEra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

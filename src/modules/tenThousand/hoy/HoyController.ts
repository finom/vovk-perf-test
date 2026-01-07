import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoy")
export default class HoyController {
  @operation({
    summary: "Get Hoy",
  })
  @get()
  static getHoy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoy",
  })
  @post("{id}")
  static createHoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

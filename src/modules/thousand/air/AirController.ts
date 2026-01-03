import { procedure, prefix, get, post, operation } from "vovk";

@prefix("airs")
export default class AirController {
  @operation({
    summary: "Get Airs",
  })
  @get()
  static getAirs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Air",
  })
  @post("{id}")
  static createAir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

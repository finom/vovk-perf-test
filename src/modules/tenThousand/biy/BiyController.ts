import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biys")
export default class BiyController {
  @operation({
    summary: "Get Biys",
  })
  @get()
  static getBiys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Biy",
  })
  @post("{id}")
  static createBiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

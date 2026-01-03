import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crts")
export default class CrtController {
  @operation({
    summary: "Get Crts",
  })
  @get()
  static getCrts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crt",
  })
  @post("{id}")
  static createCrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

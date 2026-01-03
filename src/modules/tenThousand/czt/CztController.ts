import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czts")
export default class CztController {
  @operation({
    summary: "Get Czts",
  })
  @get()
  static getCzts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czt",
  })
  @post("{id}")
  static createCzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

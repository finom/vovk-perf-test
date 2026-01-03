import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eches")
export default class EchController {
  @operation({
    summary: "Get Eches",
  })
  @get()
  static getEches = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ech",
  })
  @post("{id}")
  static createEch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

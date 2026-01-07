import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpp")
export default class GppController {
  @operation({
    summary: "Get Gpp",
  })
  @get()
  static getGpp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpp",
  })
  @post("{id}")
  static createGpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

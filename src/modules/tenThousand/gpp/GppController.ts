import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpps")
export default class GppController {
  @operation({
    summary: "Get Gpps",
  })
  @get()
  static getGpps = procedure({
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

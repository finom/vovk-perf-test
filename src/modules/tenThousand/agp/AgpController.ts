import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agps")
export default class AgpController {
  @operation({
    summary: "Get Agps",
  })
  @get()
  static getAgps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agp",
  })
  @post("{id}")
  static createAgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

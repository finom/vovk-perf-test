import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwps")
export default class GwpController {
  @operation({
    summary: "Get Gwps",
  })
  @get()
  static getGwps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwp",
  })
  @post("{id}")
  static createGwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

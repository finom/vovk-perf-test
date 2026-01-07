import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gau")
export default class GauController {
  @operation({
    summary: "Get Gau",
  })
  @get()
  static getGau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gau",
  })
  @post("{id}")
  static createGau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

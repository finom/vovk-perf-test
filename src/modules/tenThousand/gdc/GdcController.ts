import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdc")
export default class GdcController {
  @operation({
    summary: "Get Gdc",
  })
  @get()
  static getGdc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdc",
  })
  @post("{id}")
  static createGdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

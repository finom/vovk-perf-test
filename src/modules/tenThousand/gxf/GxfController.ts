import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxfs")
export default class GxfController {
  @operation({
    summary: "Get Gxfs",
  })
  @get()
  static getGxfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxf",
  })
  @post("{id}")
  static createGxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpzs")
export default class GpzController {
  @operation({
    summary: "Get Gpzs",
  })
  @get()
  static getGpzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpz",
  })
  @post("{id}")
  static createGpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

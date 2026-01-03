import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpcs")
export default class GpcController {
  @operation({
    summary: "Get Gpcs",
  })
  @get()
  static getGpcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpc",
  })
  @post("{id}")
  static createGpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

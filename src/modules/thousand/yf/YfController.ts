import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yf")
export default class YfController {
  @operation({
    summary: "Get Yf",
  })
  @get()
  static getYf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yf",
  })
  @post("{id}")
  static createYf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

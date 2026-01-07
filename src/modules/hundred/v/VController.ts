import { procedure, prefix, get, post, operation } from "vovk";

@prefix("v")
export default class VController {
  @operation({
    summary: "Get V",
  })
  @get()
  static getV = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create V",
  })
  @post("{id}")
  static createV = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

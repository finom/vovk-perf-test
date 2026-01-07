import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eku")
export default class EkuController {
  @operation({
    summary: "Get Eku",
  })
  @get()
  static getEku = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eku",
  })
  @post("{id}")
  static createEku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

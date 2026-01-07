import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eix")
export default class EixController {
  @operation({
    summary: "Get Eix",
  })
  @get()
  static getEix = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eix",
  })
  @post("{id}")
  static createEix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

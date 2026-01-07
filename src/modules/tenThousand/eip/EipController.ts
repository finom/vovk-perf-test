import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eip")
export default class EipController {
  @operation({
    summary: "Get Eip",
  })
  @get()
  static getEip = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eip",
  })
  @post("{id}")
  static createEip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

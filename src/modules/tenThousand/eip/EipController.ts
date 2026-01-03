import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eips")
export default class EipController {
  @operation({
    summary: "Get Eips",
  })
  @get()
  static getEips = procedure({
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

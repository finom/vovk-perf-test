import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zo")
export default class ZoController {
  @operation({
    summary: "Get Zo",
  })
  @get()
  static getZo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zo",
  })
  @post("{id}")
  static createZo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

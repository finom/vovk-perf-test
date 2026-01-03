import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irls")
export default class IrlController {
  @operation({
    summary: "Get Irls",
  })
  @get()
  static getIrls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irl",
  })
  @post("{id}")
  static createIrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

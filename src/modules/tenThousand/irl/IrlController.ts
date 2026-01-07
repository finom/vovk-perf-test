import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irl")
export default class IrlController {
  @operation({
    summary: "Get Irl",
  })
  @get()
  static getIrl = procedure({
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

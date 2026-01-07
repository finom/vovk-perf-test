import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nor")
export default class NorController {
  @operation({
    summary: "Get Nor",
  })
  @get()
  static getNor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nor",
  })
  @post("{id}")
  static createNor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

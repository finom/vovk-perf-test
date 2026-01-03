import { procedure, prefix, get, post, operation } from "vovk";

@prefix("we")
export default class WeController {
  @operation({
    summary: "Get We",
  })
  @get()
  static getWe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create We",
  })
  @post("{id}")
  static createWe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

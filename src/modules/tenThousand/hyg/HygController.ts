import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyg")
export default class HygController {
  @operation({
    summary: "Get Hyg",
  })
  @get()
  static getHyg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyg",
  })
  @post("{id}")
  static createHyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gth")
export default class GthController {
  @operation({
    summary: "Get Gth",
  })
  @get()
  static getGth = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gth",
  })
  @post("{id}")
  static createGth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

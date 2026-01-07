import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwc")
export default class GwcController {
  @operation({
    summary: "Get Gwc",
  })
  @get()
  static getGwc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwc",
  })
  @post("{id}")
  static createGwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

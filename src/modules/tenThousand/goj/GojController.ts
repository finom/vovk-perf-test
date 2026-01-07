import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goj")
export default class GojController {
  @operation({
    summary: "Get Goj",
  })
  @get()
  static getGoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goj",
  })
  @post("{id}")
  static createGoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

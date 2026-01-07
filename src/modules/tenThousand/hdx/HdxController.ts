import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdx")
export default class HdxController {
  @operation({
    summary: "Get Hdx",
  })
  @get()
  static getHdx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdx",
  })
  @post("{id}")
  static createHdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

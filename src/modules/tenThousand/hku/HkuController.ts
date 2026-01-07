import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hku")
export default class HkuController {
  @operation({
    summary: "Get Hku",
  })
  @get()
  static getHku = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hku",
  })
  @post("{id}")
  static createHku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

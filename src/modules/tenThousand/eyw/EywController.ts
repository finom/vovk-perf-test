import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyw")
export default class EywController {
  @operation({
    summary: "Get Eyw",
  })
  @get()
  static getEyw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyw",
  })
  @post("{id}")
  static createEyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

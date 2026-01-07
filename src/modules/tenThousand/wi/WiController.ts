import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wi")
export default class WiController {
  @operation({
    summary: "Get Wi",
  })
  @get()
  static getWi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wi",
  })
  @post("{id}")
  static createWi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

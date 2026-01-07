import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmg")
export default class HmgController {
  @operation({
    summary: "Get Hmg",
  })
  @get()
  static getHmg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmg",
  })
  @post("{id}")
  static createHmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

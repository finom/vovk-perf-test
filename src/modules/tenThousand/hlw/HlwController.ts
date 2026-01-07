import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlw")
export default class HlwController {
  @operation({
    summary: "Get Hlw",
  })
  @get()
  static getHlw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlw",
  })
  @post("{id}")
  static createHlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

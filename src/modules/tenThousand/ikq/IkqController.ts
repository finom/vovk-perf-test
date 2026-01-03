import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikqs")
export default class IkqController {
  @operation({
    summary: "Get Ikqs",
  })
  @get()
  static getIkqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikq",
  })
  @post("{id}")
  static createIkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

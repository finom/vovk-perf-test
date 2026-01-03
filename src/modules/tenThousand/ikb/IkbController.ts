import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikbs")
export default class IkbController {
  @operation({
    summary: "Get Ikbs",
  })
  @get()
  static getIkbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikb",
  })
  @post("{id}")
  static createIkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

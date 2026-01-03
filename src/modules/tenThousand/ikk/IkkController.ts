import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikks")
export default class IkkController {
  @operation({
    summary: "Get Ikks",
  })
  @get()
  static getIkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikk",
  })
  @post("{id}")
  static createIkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evks")
export default class EvkController {
  @operation({
    summary: "Get Evks",
  })
  @get()
  static getEvks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evk",
  })
  @post("{id}")
  static createEvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

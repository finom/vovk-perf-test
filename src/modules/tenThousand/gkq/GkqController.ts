import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkq")
export default class GkqController {
  @operation({
    summary: "Get Gkq",
  })
  @get()
  static getGkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkq",
  })
  @post("{id}")
  static createGkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

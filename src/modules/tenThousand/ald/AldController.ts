import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alds")
export default class AldController {
  @operation({
    summary: "Get Alds",
  })
  @get()
  static getAlds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ald",
  })
  @post("{id}")
  static createAld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ors")
export default class OrController {
  @operation({
    summary: "Get Ors",
  })
  @get()
  static getOrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Or",
  })
  @post("{id}")
  static createOr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

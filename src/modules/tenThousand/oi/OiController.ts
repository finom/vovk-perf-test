import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oi")
export default class OiController {
  @operation({
    summary: "Get Oi",
  })
  @get()
  static getOi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oi",
  })
  @post("{id}")
  static createOi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

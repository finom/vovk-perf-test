import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asu")
export default class AsuController {
  @operation({
    summary: "Get Asu",
  })
  @get()
  static getAsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asu",
  })
  @post("{id}")
  static createAsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

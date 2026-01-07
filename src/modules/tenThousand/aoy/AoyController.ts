import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoy")
export default class AoyController {
  @operation({
    summary: "Get Aoy",
  })
  @get()
  static getAoy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoy",
  })
  @post("{id}")
  static createAoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

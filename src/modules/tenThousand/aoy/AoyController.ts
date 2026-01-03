import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoys")
export default class AoyController {
  @operation({
    summary: "Get Aoys",
  })
  @get()
  static getAoys = procedure({
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

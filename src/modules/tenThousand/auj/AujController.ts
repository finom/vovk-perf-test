import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auj")
export default class AujController {
  @operation({
    summary: "Get Auj",
  })
  @get()
  static getAuj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auj",
  })
  @post("{id}")
  static createAuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

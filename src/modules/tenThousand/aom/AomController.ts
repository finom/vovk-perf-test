import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aom")
export default class AomController {
  @operation({
    summary: "Get Aom",
  })
  @get()
  static getAom = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aom",
  })
  @post("{id}")
  static createAom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

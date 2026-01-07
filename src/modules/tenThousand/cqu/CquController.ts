import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqu")
export default class CquController {
  @operation({
    summary: "Get Cqu",
  })
  @get()
  static getCqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqu",
  })
  @post("{id}")
  static createCqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

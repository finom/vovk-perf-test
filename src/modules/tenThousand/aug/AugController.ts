import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aug")
export default class AugController {
  @operation({
    summary: "Get Aug",
  })
  @get()
  static getAug = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aug",
  })
  @post("{id}")
  static createAug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

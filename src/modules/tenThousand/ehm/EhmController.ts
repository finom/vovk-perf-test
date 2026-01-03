import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehms")
export default class EhmController {
  @operation({
    summary: "Get Ehms",
  })
  @get()
  static getEhms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehm",
  })
  @post("{id}")
  static createEhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eft")
export default class EftController {
  @operation({
    summary: "Get Eft",
  })
  @get()
  static getEft = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eft",
  })
  @post("{id}")
  static createEft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

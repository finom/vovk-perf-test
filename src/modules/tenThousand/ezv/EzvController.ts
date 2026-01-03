import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezvs")
export default class EzvController {
  @operation({
    summary: "Get Ezvs",
  })
  @get()
  static getEzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezv",
  })
  @post("{id}")
  static createEzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

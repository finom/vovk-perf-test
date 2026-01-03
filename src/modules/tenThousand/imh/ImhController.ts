import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imhs")
export default class ImhController {
  @operation({
    summary: "Get Imhs",
  })
  @get()
  static getImhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imh",
  })
  @post("{id}")
  static createImh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

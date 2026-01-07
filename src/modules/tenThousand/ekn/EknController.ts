import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekn")
export default class EknController {
  @operation({
    summary: "Get Ekn",
  })
  @get()
  static getEkn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekn",
  })
  @post("{id}")
  static createEkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

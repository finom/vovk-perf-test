import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekjs")
export default class EkjController {
  @operation({
    summary: "Get Ekjs",
  })
  @get()
  static getEkjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekj",
  })
  @post("{id}")
  static createEkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

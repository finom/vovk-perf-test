import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekd")
export default class EkdController {
  @operation({
    summary: "Get Ekd",
  })
  @get()
  static getEkd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekd",
  })
  @post("{id}")
  static createEkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

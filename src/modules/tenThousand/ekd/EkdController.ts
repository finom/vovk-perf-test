import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekds")
export default class EkdController {
  @operation({
    summary: "Get Ekds",
  })
  @get()
  static getEkds = procedure({
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

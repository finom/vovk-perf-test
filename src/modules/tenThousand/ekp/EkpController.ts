import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekp")
export default class EkpController {
  @operation({
    summary: "Get Ekp",
  })
  @get()
  static getEkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekp",
  })
  @post("{id}")
  static createEkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

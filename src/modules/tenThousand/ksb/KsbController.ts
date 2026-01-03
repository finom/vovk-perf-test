import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksbs")
export default class KsbController {
  @operation({
    summary: "Get Ksbs",
  })
  @get()
  static getKsbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksb",
  })
  @post("{id}")
  static createKsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

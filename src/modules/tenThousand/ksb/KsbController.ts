import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksb")
export default class KsbController {
  @operation({
    summary: "Get Ksb",
  })
  @get()
  static getKsb = procedure({
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

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kif")
export default class KifController {
  @operation({
    summary: "Get Kif",
  })
  @get()
  static getKif = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kif",
  })
  @post("{id}")
  static createKif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

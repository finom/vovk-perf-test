import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kifs")
export default class KifController {
  @operation({
    summary: "Get Kifs",
  })
  @get()
  static getKifs = procedure({
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

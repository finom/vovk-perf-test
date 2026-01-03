import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kols")
export default class KolController {
  @operation({
    summary: "Get Kols",
  })
  @get()
  static getKols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kol",
  })
  @post("{id}")
  static createKol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

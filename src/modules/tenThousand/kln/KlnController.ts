import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kln")
export default class KlnController {
  @operation({
    summary: "Get Kln",
  })
  @get()
  static getKln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kln",
  })
  @post("{id}")
  static createKln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

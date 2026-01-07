import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kl")
export default class KlController {
  @operation({
    summary: "Get Kl",
  })
  @get()
  static getKl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kl",
  })
  @post("{id}")
  static createKl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

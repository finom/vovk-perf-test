import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nais")
export default class NaiController {
  @operation({
    summary: "Get Nais",
  })
  @get()
  static getNais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nai",
  })
  @post("{id}")
  static createNai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

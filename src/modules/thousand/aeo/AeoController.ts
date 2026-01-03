import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeos")
export default class AeoController {
  @operation({
    summary: "Get Aeos",
  })
  @get()
  static getAeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aeo",
  })
  @post("{id}")
  static createAeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

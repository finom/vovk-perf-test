import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neos")
export default class NeoController {
  @operation({
    summary: "Get Neos",
  })
  @get()
  static getNeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Neo",
  })
  @post("{id}")
  static createNeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

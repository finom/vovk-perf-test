import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsa")
export default class NsaController {
  @operation({
    summary: "Get Nsa",
  })
  @get()
  static getNsa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsa",
  })
  @post("{id}")
  static createNsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

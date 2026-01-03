import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neas")
export default class NeaController {
  @operation({
    summary: "Get Neas",
  })
  @get()
  static getNeas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nea",
  })
  @post("{id}")
  static createNea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

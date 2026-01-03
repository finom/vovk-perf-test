import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltas")
export default class LtaController {
  @operation({
    summary: "Get Ltas",
  })
  @get()
  static getLtas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lta",
  })
  @post("{id}")
  static createLta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

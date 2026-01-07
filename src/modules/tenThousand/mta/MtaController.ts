import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mta")
export default class MtaController {
  @operation({
    summary: "Get Mta",
  })
  @get()
  static getMta = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mta",
  })
  @post("{id}")
  static createMta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

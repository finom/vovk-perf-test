import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngas")
export default class NgaController {
  @operation({
    summary: "Get Ngas",
  })
  @get()
  static getNgas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nga",
  })
  @post("{id}")
  static createNga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

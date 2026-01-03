import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbas")
export default class MbaController {
  @operation({
    summary: "Get Mbas",
  })
  @get()
  static getMbas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mba",
  })
  @post("{id}")
  static createMba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

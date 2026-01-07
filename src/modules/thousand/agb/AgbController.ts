import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agb")
export default class AgbController {
  @operation({
    summary: "Get Agb",
  })
  @get()
  static getAgb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agb",
  })
  @post("{id}")
  static createAgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

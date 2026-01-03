import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agbs")
export default class AgbController {
  @operation({
    summary: "Get Agbs",
  })
  @get()
  static getAgbs = procedure({
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

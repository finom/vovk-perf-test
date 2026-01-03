import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evns")
export default class EvnController {
  @operation({
    summary: "Get Evns",
  })
  @get()
  static getEvns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evn",
  })
  @post("{id}")
  static createEvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

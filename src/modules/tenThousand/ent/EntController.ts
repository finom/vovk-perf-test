import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ent")
export default class EntController {
  @operation({
    summary: "Get Ent",
  })
  @get()
  static getEnt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ent",
  })
  @post("{id}")
  static createEnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

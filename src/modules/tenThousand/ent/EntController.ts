import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ents")
export default class EntController {
  @operation({
    summary: "Get Ents",
  })
  @get()
  static getEnts = procedure({
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

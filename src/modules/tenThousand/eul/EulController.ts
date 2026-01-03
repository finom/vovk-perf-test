import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euls")
export default class EulController {
  @operation({
    summary: "Get Euls",
  })
  @get()
  static getEuls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eul",
  })
  @post("{id}")
  static createEul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

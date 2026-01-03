import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eobs")
export default class EobController {
  @operation({
    summary: "Get Eobs",
  })
  @get()
  static getEobs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eob",
  })
  @post("{id}")
  static createEob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

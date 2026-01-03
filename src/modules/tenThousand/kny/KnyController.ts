import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knies")
export default class KnyController {
  @operation({
    summary: "Get Knies",
  })
  @get()
  static getKnies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kny",
  })
  @post("{id}")
  static createKny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

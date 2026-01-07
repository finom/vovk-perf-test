import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coi")
export default class CoiController {
  @operation({
    summary: "Get Coi",
  })
  @get()
  static getCoi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coi",
  })
  @post("{id}")
  static createCoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

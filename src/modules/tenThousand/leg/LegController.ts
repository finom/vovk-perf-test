import { procedure, prefix, get, post, operation } from "vovk";

@prefix("legs")
export default class LegController {
  @operation({
    summary: "Get Legs",
  })
  @get()
  static getLegs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Leg",
  })
  @post("{id}")
  static createLeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

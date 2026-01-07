import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cup")
export default class CupController {
  @operation({
    summary: "Get Cup",
  })
  @get()
  static getCup = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cup",
  })
  @post("{id}")
  static createCup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

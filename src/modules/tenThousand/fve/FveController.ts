import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fves")
export default class FveController {
  @operation({
    summary: "Get Fves",
  })
  @get()
  static getFves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fve",
  })
  @post("{id}")
  static createFve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

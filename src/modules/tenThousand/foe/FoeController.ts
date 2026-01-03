import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foes")
export default class FoeController {
  @operation({
    summary: "Get Foes",
  })
  @get()
  static getFoes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foe",
  })
  @post("{id}")
  static createFoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

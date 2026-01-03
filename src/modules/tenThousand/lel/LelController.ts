import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lels")
export default class LelController {
  @operation({
    summary: "Get Lels",
  })
  @get()
  static getLels = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lel",
  })
  @post("{id}")
  static createLel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

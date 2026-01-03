import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leys")
export default class LeyController {
  @operation({
    summary: "Get Leys",
  })
  @get()
  static getLeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ley",
  })
  @post("{id}")
  static createLey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

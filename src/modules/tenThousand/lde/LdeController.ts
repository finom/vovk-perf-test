import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lde")
export default class LdeController {
  @operation({
    summary: "Get Lde",
  })
  @get()
  static getLde = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lde",
  })
  @post("{id}")
  static createLde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

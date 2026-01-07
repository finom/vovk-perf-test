import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rh")
export default class RhController {
  @operation({
    summary: "Get Rh",
  })
  @get()
  static getRh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rh",
  })
  @post("{id}")
  static createRh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

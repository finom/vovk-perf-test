import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bus")
export default class BuController {
  @operation({
    summary: "Get Bus",
  })
  @get()
  static getBus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bu",
  })
  @post("{id}")
  static createBu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

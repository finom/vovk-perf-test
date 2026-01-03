import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkies")
export default class FkyController {
  @operation({
    summary: "Get Fkies",
  })
  @get()
  static getFkies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fky",
  })
  @post("{id}")
  static createFky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

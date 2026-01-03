import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkies")
export default class DkyController {
  @operation({
    summary: "Get Dkies",
  })
  @get()
  static getDkies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dky",
  })
  @post("{id}")
  static createDky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

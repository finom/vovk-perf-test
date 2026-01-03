import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvies")
export default class DvyController {
  @operation({
    summary: "Get Dvies",
  })
  @get()
  static getDvies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvy",
  })
  @post("{id}")
  static createDvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

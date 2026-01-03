import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvfs")
export default class DvfController {
  @operation({
    summary: "Get Dvfs",
  })
  @get()
  static getDvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvf",
  })
  @post("{id}")
  static createDvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

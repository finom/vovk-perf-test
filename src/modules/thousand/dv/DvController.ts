import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvs")
export default class DvController {
  @operation({
    summary: "Get Dvs",
  })
  @get()
  static getDvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dv",
  })
  @post("{id}")
  static createDv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

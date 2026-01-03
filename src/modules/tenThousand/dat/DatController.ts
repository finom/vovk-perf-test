import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dats")
export default class DatController {
  @operation({
    summary: "Get Dats",
  })
  @get()
  static getDats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dat",
  })
  @post("{id}")
  static createDat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

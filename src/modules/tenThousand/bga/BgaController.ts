import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgas")
export default class BgaController {
  @operation({
    summary: "Get Bgas",
  })
  @get()
  static getBgas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bga",
  })
  @post("{id}")
  static createBga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

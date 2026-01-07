import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fir")
export default class FirController {
  @operation({
    summary: "Get Fir",
  })
  @get()
  static getFir = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fir",
  })
  @post("{id}")
  static createFir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

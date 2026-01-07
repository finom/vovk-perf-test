import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffl")
export default class FflController {
  @operation({
    summary: "Get Ffl",
  })
  @get()
  static getFfl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffl",
  })
  @post("{id}")
  static createFfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

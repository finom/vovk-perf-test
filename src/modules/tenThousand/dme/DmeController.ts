import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dme")
export default class DmeController {
  @operation({
    summary: "Get Dme",
  })
  @get()
  static getDme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dme",
  })
  @post("{id}")
  static createDme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwbs")
export default class MwbController {
  @operation({
    summary: "Get Mwbs",
  })
  @get()
  static getMwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwb",
  })
  @post("{id}")
  static createMwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

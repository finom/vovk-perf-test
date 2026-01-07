import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfi")
export default class NfiController {
  @operation({
    summary: "Get Nfi",
  })
  @get()
  static getNfi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfi",
  })
  @post("{id}")
  static createNfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

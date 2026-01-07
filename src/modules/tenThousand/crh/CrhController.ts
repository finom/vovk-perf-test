import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crh")
export default class CrhController {
  @operation({
    summary: "Get Crh",
  })
  @get()
  static getCrh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crh",
  })
  @post("{id}")
  static createCrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crrs")
export default class CrrController {
  @operation({
    summary: "Get Crrs",
  })
  @get()
  static getCrrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crr",
  })
  @post("{id}")
  static createCrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcc")
export default class MccController {
  @operation({
    summary: "Get Mcc",
  })
  @get()
  static getMcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcc",
  })
  @post("{id}")
  static createMcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnns")
export default class NnnController {
  @operation({
    summary: "Get Nnns",
  })
  @get()
  static getNnns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnn",
  })
  @post("{id}")
  static createNnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

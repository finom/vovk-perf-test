import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnis")
export default class CniController {
  @operation({
    summary: "Get Cnis",
  })
  @get()
  static getCnis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cni",
  })
  @post("{id}")
  static createCni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

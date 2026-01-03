import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npps")
export default class NppController {
  @operation({
    summary: "Get Npps",
  })
  @get()
  static getNpps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npp",
  })
  @post("{id}")
  static createNpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

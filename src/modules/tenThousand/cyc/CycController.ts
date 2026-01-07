import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyc")
export default class CycController {
  @operation({
    summary: "Get Cyc",
  })
  @get()
  static getCyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyc",
  })
  @post("{id}")
  static createCyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cns")
export default class CnController {
  @operation({
    summary: "Get Cns",
  })
  @get()
  static getCns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cn",
  })
  @post("{id}")
  static createCn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

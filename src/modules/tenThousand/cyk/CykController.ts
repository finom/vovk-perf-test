import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyk")
export default class CykController {
  @operation({
    summary: "Get Cyk",
  })
  @get()
  static getCyk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyk",
  })
  @post("{id}")
  static createCyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

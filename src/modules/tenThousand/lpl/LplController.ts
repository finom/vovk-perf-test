import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpl")
export default class LplController {
  @operation({
    summary: "Get Lpl",
  })
  @get()
  static getLpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpl",
  })
  @post("{id}")
  static createLpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

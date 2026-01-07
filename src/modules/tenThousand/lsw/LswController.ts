import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsw")
export default class LswController {
  @operation({
    summary: "Get Lsw",
  })
  @get()
  static getLsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsw",
  })
  @post("{id}")
  static createLsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhls")
export default class NhlController {
  @operation({
    summary: "Get Nhls",
  })
  @get()
  static getNhls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhl",
  })
  @post("{id}")
  static createNhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

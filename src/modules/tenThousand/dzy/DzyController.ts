import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzies")
export default class DzyController {
  @operation({
    summary: "Get Dzies",
  })
  @get()
  static getDzies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzy",
  })
  @post("{id}")
  static createDzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

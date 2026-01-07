import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lob")
export default class LobController {
  @operation({
    summary: "Get Lob",
  })
  @get()
  static getLob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lob",
  })
  @post("{id}")
  static createLob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

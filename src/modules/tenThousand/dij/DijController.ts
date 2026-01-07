import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dij")
export default class DijController {
  @operation({
    summary: "Get Dij",
  })
  @get()
  static getDij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dij",
  })
  @post("{id}")
  static createDij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

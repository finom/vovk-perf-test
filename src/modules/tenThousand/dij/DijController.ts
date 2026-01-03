import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dijs")
export default class DijController {
  @operation({
    summary: "Get Dijs",
  })
  @get()
  static getDijs = procedure({
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

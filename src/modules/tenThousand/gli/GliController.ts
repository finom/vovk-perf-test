import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gli")
export default class GliController {
  @operation({
    summary: "Get Gli",
  })
  @get()
  static getGli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gli",
  })
  @post("{id}")
  static createGli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

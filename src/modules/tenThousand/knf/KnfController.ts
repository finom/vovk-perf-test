import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knfs")
export default class KnfController {
  @operation({
    summary: "Get Knfs",
  })
  @get()
  static getKnfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knf",
  })
  @post("{id}")
  static createKnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

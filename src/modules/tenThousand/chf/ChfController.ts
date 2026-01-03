import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chfs")
export default class ChfController {
  @operation({
    summary: "Get Chfs",
  })
  @get()
  static getChfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chf",
  })
  @post("{id}")
  static createChf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

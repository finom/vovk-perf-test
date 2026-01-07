import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chf")
export default class ChfController {
  @operation({
    summary: "Get Chf",
  })
  @get()
  static getChf = procedure({
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

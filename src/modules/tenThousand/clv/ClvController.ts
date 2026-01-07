import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clv")
export default class ClvController {
  @operation({
    summary: "Get Clv",
  })
  @get()
  static getClv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clv",
  })
  @post("{id}")
  static createClv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

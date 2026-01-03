import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aues")
export default class AueController {
  @operation({
    summary: "Get Aues",
  })
  @get()
  static getAues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aue",
  })
  @post("{id}")
  static createAue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

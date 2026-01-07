import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apo")
export default class ApoController {
  @operation({
    summary: "Get Apo",
  })
  @get()
  static getApo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apo",
  })
  @post("{id}")
  static createApo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

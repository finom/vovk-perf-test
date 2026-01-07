import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knm")
export default class KnmController {
  @operation({
    summary: "Get Knm",
  })
  @get()
  static getKnm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knm",
  })
  @post("{id}")
  static createKnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

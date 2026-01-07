import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehp")
export default class EhpController {
  @operation({
    summary: "Get Ehp",
  })
  @get()
  static getEhp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehp",
  })
  @post("{id}")
  static createEhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehps")
export default class EhpController {
  @operation({
    summary: "Get Ehps",
  })
  @get()
  static getEhps = procedure({
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

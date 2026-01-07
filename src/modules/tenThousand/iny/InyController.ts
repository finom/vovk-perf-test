import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iny")
export default class InyController {
  @operation({
    summary: "Get Iny",
  })
  @get()
  static getIny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iny",
  })
  @post("{id}")
  static createIny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cev")
export default class CevController {
  @operation({
    summary: "Get Cev",
  })
  @get()
  static getCev = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cev",
  })
  @post("{id}")
  static createCev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iei")
export default class IeiController {
  @operation({
    summary: "Get Iei",
  })
  @get()
  static getIei = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iei",
  })
  @post("{id}")
  static createIei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibl")
export default class IblController {
  @operation({
    summary: "Get Ibl",
  })
  @get()
  static getIbl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibl",
  })
  @post("{id}")
  static createIbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

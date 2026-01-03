import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehws")
export default class EhwController {
  @operation({
    summary: "Get Ehws",
  })
  @get()
  static getEhws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehw",
  })
  @post("{id}")
  static createEhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

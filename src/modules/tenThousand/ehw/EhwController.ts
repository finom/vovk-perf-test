import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehw")
export default class EhwController {
  @operation({
    summary: "Get Ehw",
  })
  @get()
  static getEhw = procedure({
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

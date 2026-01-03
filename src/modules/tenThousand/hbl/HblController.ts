import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbls")
export default class HblController {
  @operation({
    summary: "Get Hbls",
  })
  @get()
  static getHbls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbl",
  })
  @post("{id}")
  static createHbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

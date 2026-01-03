import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikws")
export default class IkwController {
  @operation({
    summary: "Get Ikws",
  })
  @get()
  static getIkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikw",
  })
  @post("{id}")
  static createIkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

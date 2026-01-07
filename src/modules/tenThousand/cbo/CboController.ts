import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbo")
export default class CboController {
  @operation({
    summary: "Get Cbo",
  })
  @get()
  static getCbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbo",
  })
  @post("{id}")
  static createCbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

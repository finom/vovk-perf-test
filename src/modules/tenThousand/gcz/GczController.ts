import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcz")
export default class GczController {
  @operation({
    summary: "Get Gcz",
  })
  @get()
  static getGcz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcz",
  })
  @post("{id}")
  static createGcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

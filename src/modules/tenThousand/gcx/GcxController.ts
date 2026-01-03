import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcxes")
export default class GcxController {
  @operation({
    summary: "Get Gcxes",
  })
  @get()
  static getGcxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcx",
  })
  @post("{id}")
  static createGcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

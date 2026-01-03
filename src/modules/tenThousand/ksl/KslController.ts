import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksls")
export default class KslController {
  @operation({
    summary: "Get Ksls",
  })
  @get()
  static getKsls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksl",
  })
  @post("{id}")
  static createKsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

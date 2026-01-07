import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksl")
export default class KslController {
  @operation({
    summary: "Get Ksl",
  })
  @get()
  static getKsl = procedure({
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

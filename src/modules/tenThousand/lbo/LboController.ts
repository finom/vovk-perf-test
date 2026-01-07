import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbo")
export default class LboController {
  @operation({
    summary: "Get Lbo",
  })
  @get()
  static getLbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbo",
  })
  @post("{id}")
  static createLbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

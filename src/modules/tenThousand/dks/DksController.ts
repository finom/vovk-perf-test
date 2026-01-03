import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dks")
export default class DksController {
  @operation({
    summary: "Get Dks",
  })
  @get()
  static getDks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dks",
  })
  @post("{id}")
  static createDks = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

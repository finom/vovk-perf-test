import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltts")
export default class LttController {
  @operation({
    summary: "Get Ltts",
  })
  @get()
  static getLtts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltt",
  })
  @post("{id}")
  static createLtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

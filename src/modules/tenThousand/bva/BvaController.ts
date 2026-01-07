import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bva")
export default class BvaController {
  @operation({
    summary: "Get Bva",
  })
  @get()
  static getBva = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bva",
  })
  @post("{id}")
  static createBva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

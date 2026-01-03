import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbus")
export default class FbuController {
  @operation({
    summary: "Get Fbus",
  })
  @get()
  static getFbus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbu",
  })
  @post("{id}")
  static createFbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

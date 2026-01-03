import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbus")
export default class CbuController {
  @operation({
    summary: "Get Cbus",
  })
  @get()
  static getCbus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbu",
  })
  @post("{id}")
  static createCbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

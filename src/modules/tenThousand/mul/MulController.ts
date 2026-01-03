import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muls")
export default class MulController {
  @operation({
    summary: "Get Muls",
  })
  @get()
  static getMuls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mul",
  })
  @post("{id}")
  static createMul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

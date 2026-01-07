import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mul")
export default class MulController {
  @operation({
    summary: "Get Mul",
  })
  @get()
  static getMul = procedure({
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

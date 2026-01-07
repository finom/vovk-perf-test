import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpu")
export default class FpuController {
  @operation({
    summary: "Get Fpu",
  })
  @get()
  static getFpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpu",
  })
  @post("{id}")
  static createFpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
